import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '../src/pages/api/contact';
import type { APIContext } from 'astro';

// Mock de la librería Resend
const mockSend = vi.fn();
vi.mock('resend', () => {
  return {
    Resend: class {
      emails = {
        send: mockSend,
      };
    },
  };
});

describe('Contact API Endpoint (/api/contact)', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    mockSend.mockReset();
  });

  function createMockContext(body: unknown, env: Record<string, string> = {}): APIContext {
    const isString = typeof body === 'string';
    const request = new Request('https://fabribau.tech/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: isString ? body : JSON.stringify(body),
    });

    return {
      request,
      locals: {
        runtime: {
          env,
        },
      },
    } as unknown as APIContext;
  }

  const validPayload = {
    name: 'Fabrizio Riera Bauer',
    email: 'test@fabribau.tech',
    subject: 'Consulta de Desarrollo',
    message: 'Hola Fabrizio, quiero consultar por tus servicios de desarrollo.',
    turnstileToken: 'dummy-success-token',
    lang: 'es',
  };

  it('retorna 400 cuando el cuerpo de la solicitud no es JSON válido', async () => {
    const context = createMockContext('invalid-json-string{');
    const response = await POST(context);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.message).toContain('Cuerpo de solicitud inválido');
  });

  it('retorna 400 cuando faltan campos o no cumplen el esquema Zod', async () => {
    const context = createMockContext({
      name: 'A', // Demasiado corto
      email: 'email-invalido',
      subject: '',
      message: 'corto',
      turnstileToken: '',
    });

    const response = await POST(context);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.errors).toBeDefined();
    expect(data.errors.name).toBeDefined();
    expect(data.errors.email).toBeDefined();
    expect(data.errors.subject).toBeDefined();
    expect(data.errors.message).toBeDefined();
    expect(data.errors.turnstileToken).toBeDefined();
  });

  it('retorna 403 si la validación anti-bot de Turnstile falla', async () => {
    const context = createMockContext({
      ...validPayload,
      turnstileToken: 'dummy-fail-token',
    });

    const response = await POST(context);
    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.success).toBe(false);
    expect(data.errors?.turnstileToken).toBeDefined();
  });

  it('responde 200 en modo Mock/Dev si no hay RESEND_API_KEY configurada', async () => {
    const context = createMockContext(validPayload, {
      RESEND_API_KEY: '', // Sin clave
    });

    const response = await POST(context);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.mock).toBe(true);
  });

  it('envía ambos correos (notificación + autoresponder) con Resend cuando la clave está configurada', async () => {
    mockSend.mockResolvedValue({ data: { id: 'msg_12345' }, error: null });

    const context = createMockContext(validPayload, {
      RESEND_API_KEY: 're_real_live_test_key_12345',
      CONTACT_RECIPIENT_EMAIL: 'fabriziojriera@gmail.com',
    });

    const response = await POST(context);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);

    // Debe llamar a resend.emails.send 2 veces (Email 1: notificación a Fabrizio, Email 2: autoresponder al usuario)
    expect(mockSend).toHaveBeenCalledTimes(2);

    // Primer llamada: notificación
    const call1 = mockSend.mock.calls[0][0];
    expect(call1.to).toBe('fabriziojriera@gmail.com');
    expect(call1.replyTo).toBe('test@fabribau.tech');
    expect(call1.subject).toContain('Consulta de Desarrollo');

    // Segunda llamada: autoresponder bilingüe al remitente
    const call2 = mockSend.mock.calls[1][0];
    expect(call2.to).toBe('test@fabribau.tech');
    expect(call2.subject).toBe('¡Gracias por contactarme! — Fabrizio Riera Bauer');
  });

  it("envía el autoresponder en inglés cuando el formulario se envía con lang 'en'", async () => {
    mockSend.mockResolvedValue({ data: { id: 'msg_67890' }, error: null });

    const context = createMockContext(
      {
        ...validPayload,
        lang: 'en',
        subject: 'Collaboration Request',
      },
      {
        RESEND_API_KEY: 're_real_live_test_key_12345',
      }
    );

    const response = await POST(context);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);

    expect(mockSend).toHaveBeenCalledTimes(2);
    const call2 = mockSend.mock.calls[1][0];
    expect(call2.to).toBe('test@fabribau.tech');
    expect(call2.subject).toBe('Thank you for getting in touch! — Fabrizio Riera Bauer');
  });
});
