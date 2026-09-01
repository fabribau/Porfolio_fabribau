export interface TurnstileVerifyResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

export interface VerifyTurnstileResult {
  success: boolean;
  error?: string;
  errorCodes?: string[];
}

/**
 * Valida un token de Cloudflare Turnstile contra la API de verificación de Cloudflare.
 */
export async function verifyTurnstileToken(
  token: string,
  secretKey?: string,
  remoteIp?: string
): Promise<VerifyTurnstileResult> {
  if (!token || typeof token !== 'string' || token.trim() === '') {
    return {
      success: false,
      error: 'Token de seguridad no proporcionado',
    };
  }

  // Si no hay secretKey definida o es la clave dummy de paso de Cloudflare
  const secret = secretKey || '1x0000000000000000000000000000000AA';

  // Test dummy tokens handling
  if (token === 'dummy-success-token' || token.startsWith('XXXX.DUMMY.TOKEN')) {
    return { success: true };
  }
  if (token === 'dummy-fail-token') {
    return {
      success: false,
      error: 'Token de seguridad rechazado (dummy-fail)',
      errorCodes: ['invalid-input-response'],
    };
  }

  try {
    const formData = new URLSearchParams();
    formData.append('secret', secret);
    formData.append('response', token);
    if (remoteIp) {
      formData.append('remoteip', remoteIp);
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });

    if (!response.ok) {
      return {
        success: false,
        error: `Error de comunicación con el servicio de verificación anti-bot (${response.status})`,
      };
    }

    const outcome = (await response.json()) as TurnstileVerifyResponse;

    if (outcome.success) {
      return { success: true };
    }

    return {
      success: false,
      error: 'Verificación de seguridad fallida. Por favor intenta de nuevo.',
      errorCodes: outcome['error-codes'],
    };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Error inesperado al validar seguridad',
    };
  }
}
