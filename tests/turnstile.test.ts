import { describe, it, expect, vi, beforeEach } from "vitest";
import { verifyTurnstileToken } from "../src/lib/contact/turnstile";

describe("Cloudflare Turnstile Verification Helper", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("falla si el token está vacío o es nulo", async () => {
    const result = await verifyTurnstileToken("");
    expect(result.success).toBe(false);
    expect(result.error).toBe("Token de seguridad no proporcionado");
  });

  it("aprueba automáticamente tokens dummy de test de desarrollo", async () => {
    const result1 = await verifyTurnstileToken("dummy-success-token");
    expect(result1.success).toBe(true);

    const result2 = await verifyTurnstileToken("XXXX.DUMMY.TOKEN.LOCAL");
    expect(result2.success).toBe(true);
  });

  it("rechaza tokens dummy de fallo simulado", async () => {
    const result = await verifyTurnstileToken("dummy-fail-token");
    expect(result.success).toBe(false);
    expect(result.errorCodes).toContain("invalid-input-response");
  });

  it("llama a la API de Cloudflare con parámetros correctos y retorna éxito cuando la API responde success: true", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        challenge_ts: "2026-08-31T22:00:00Z",
        hostname: "localhost",
      }),
    });
    vi.stubGlobal("fetch", mockFetch);

    const result = await verifyTurnstileToken(
      "real-like-token-12345",
      "1x0000000000000000000000000000000AA",
      "127.0.0.1"
    );

    expect(mockFetch).toHaveBeenCalledOnce();
    expect(result.success).toBe(true);
  });

  it("maneja respuesta de fallo de Cloudflare con códigos de error", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        success: false,
        "error-codes": ["invalid-input-response", "timeout-or-duplicate"],
      }),
    });
    vi.stubGlobal("fetch", mockFetch);

    const result = await verifyTurnstileToken(
      "expired-token",
      "my-turnstile-secret"
    );

    expect(result.success).toBe(false);
    expect(result.errorCodes).toEqual(["invalid-input-response", "timeout-or-duplicate"]);
  });

  it("maneja errores de red o excepciones", async () => {
    const mockFetch = vi.fn().mockRejectedValue(new Error("Network connection lost"));
    vi.stubGlobal("fetch", mockFetch);

    const result = await verifyTurnstileToken("any-token");
    expect(result.success).toBe(false);
    expect(result.error).toContain("Network connection lost");
  });
});
