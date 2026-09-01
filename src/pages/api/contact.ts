import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { validateContactForm } from '../../lib/contact/schema';
import { verifyTurnstileToken } from '../../lib/contact/turnstile';
import {
  generateNotificationEmail,
  generateAutoresponderEmail,
} from '../../lib/contact/email-templates';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    // 1. Obtener payload JSON
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Cuerpo de solicitud inválido o no es JSON',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2. Validación de campos con Zod
    const validation = validateContactForm(body);
    if (!validation.success) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Errores de validación en el formulario',
          errors: validation.errors,
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { data } = validation;

    // 3. Resolución de variables de entorno (Cloudflare Pages locals runtime, Astro env o process.env)
    const runtimeEnv = (locals as { runtime?: { env?: Record<string, string> } })?.runtime?.env;
    const resendApiKey =
      runtimeEnv?.RESEND_API_KEY ||
      import.meta.env.RESEND_API_KEY ||
      (typeof process !== 'undefined' ? process.env.RESEND_API_KEY : undefined);

    const turnstileSecret =
      runtimeEnv?.TURNSTILE_SECRET_KEY ||
      import.meta.env.TURNSTILE_SECRET_KEY ||
      (typeof process !== 'undefined' ? process.env.TURNSTILE_SECRET_KEY : undefined) ||
      '1x0000000000000000000000000000000AA'; // Dummy test key fallback

    const recipientEmail =
      runtimeEnv?.CONTACT_RECIPIENT_EMAIL ||
      import.meta.env.CONTACT_RECIPIENT_EMAIL ||
      (typeof process !== 'undefined' ? process.env.CONTACT_RECIPIENT_EMAIL : undefined) ||
      'fabriziojriera@gmail.com';

    const fromEmail =
      runtimeEnv?.RESEND_FROM_EMAIL ||
      import.meta.env.RESEND_FROM_EMAIL ||
      (typeof process !== 'undefined' ? process.env.RESEND_FROM_EMAIL : undefined) ||
      'Portfolio Fabrizio Riera Bauer <contacto@fabribau.tech>';

    // 4. Verificación anti-bot con Cloudflare Turnstile
    const clientIp =
      request.headers.get('cf-connecting-ip') ||
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      undefined;

    const turnstileResult = await verifyTurnstileToken(
      data.turnstileToken,
      turnstileSecret,
      clientIp
    );

    if (!turnstileResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          message: turnstileResult.error || 'Fallo de verificación de seguridad',
          errors: {
            turnstileToken:
              data.lang === 'en'
                ? 'Bot challenge verification failed. Please try again.'
                : 'La verificación de seguridad anti-bot ha fallado. Por favor intenta de nuevo.',
          },
        }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 5. Modo desarrollo / Mock si no hay API Key de Resend configurada
    if (
      !resendApiKey ||
      resendApiKey.startsWith('re_dummy') ||
      resendApiKey.startsWith('re_mock')
    ) {
      console.log('[MOCK EMAIL] Simulación de envío exitoso:', {
        to: recipientEmail,
        from: fromEmail,
        replyTo: data.email,
        subject: data.subject,
        lang: data.lang,
      });

      return new Response(
        JSON.stringify({
          success: true,
          mock: true,
          message:
            data.lang === 'en'
              ? 'Message sent successfully! (Dev/Mock Mode)'
              : '¡Mensaje recibido con éxito! (Modo desarrollo simulado)',
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 6. Despacho real con Resend
    const resend = new Resend(resendApiKey);

    // Email 1: Notificación a Fabrizio
    const notification = generateNotificationEmail(data);
    const notificationResult = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: data.email,
      subject: notification.subject,
      html: notification.html,
      text: notification.text,
    });

    if (notificationResult.error) {
      console.error('[Resend Error - Notification]', notificationResult.error);
      return new Response(
        JSON.stringify({
          success: false,
          message:
            data.lang === 'en'
              ? 'Failed to deliver message via Resend. Please try again.'
              : 'No se pudo enviar el correo mediante el servicio de email. Intenta nuevamente.',
          detail: notificationResult.error.message,
        }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email 2: Autoresponder de agradecimiento al usuario (Bilingüe según origen)
    try {
      const autoresponder = generateAutoresponderEmail(data);
      await resend.emails.send({
        from: fromEmail,
        to: data.email,
        subject: autoresponder.subject,
        html: autoresponder.html,
        text: autoresponder.text,
      });
    } catch (autoresponderError) {
      // Si el autoresponder falla (por ejemplo en pruebas con onboarding@resend.dev que solo permite enviar a la cuenta propia), no rompemos la respuesta positiva principal
      console.warn('[Resend Warning - Autoresponder]', autoresponderError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message:
          data.lang === 'en'
            ? "Message received! I'll get back to you shortly."
            : '¡Mensaje recibido! Me pondré en contacto contigo a la brevedad.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('[Contact API Error]', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Ocurrió un error inesperado al procesar la solicitud.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
