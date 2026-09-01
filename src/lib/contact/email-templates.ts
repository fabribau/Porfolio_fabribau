import type { ContactFormData } from "./schema";

/**
 * Escapa caracteres HTML para evitar inyecciones XSS en clientes de correo.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Genera el correo de notificación interna para Fabrizio.
 */
export function generateNotificationEmail(data: ContactFormData) {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br/>");
  const dateStr = new Date().toLocaleString("es-AR", {
    timeZone: "America/Argentina/San_Luis",
  });

  const subject = `[Portfolio fabribau.tech] ${data.subject} — De: ${data.name}`;

  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F5F0E8; color: #0D0D0D;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border: 3px solid #0D0D0D; box-shadow: 6px 6px 0px #0D0D0D; padding: 28px;">
    
    <!-- Header -->
    <div style="background-color: #FFE400; border: 2px solid #0D0D0D; padding: 12px 16px; margin-bottom: 20px; font-weight: 800; font-size: 16px; text-transform: uppercase; letter-spacing: 0.05em;">
      📬 Nuevo mensaje desde fabribau.tech
    </div>

    <!-- Details Box -->
    <div style="background-color: #FAFAFA; border: 2px solid #0D0D0D; padding: 16px; margin-bottom: 20px;">
      <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Remitente:</strong> ${safeName}</p>
      <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #0D0D0D; font-weight: bold;">${safeEmail}</a></p>
      <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Asunto:</strong> ${safeSubject}</p>
      <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Idioma origen:</strong> ${data.lang.toUpperCase()}</p>
      <p style="margin: 0; font-size: 12px; color: #666666;"><strong>Fecha:</strong> ${dateStr} (San Luis, AR)</p>
    </div>

    <!-- Message Content -->
    <div style="margin-bottom: 24px;">
      <h3 style="margin: 0 0 10px 0; font-size: 15px; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid #0D0D0D; padding-bottom: 4px;">
        Mensaje:
      </h3>
      <div style="background-color: #FFFFFF; border: 2px solid #0D0D0D; padding: 16px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; font-family: monospace;">
${safeMessage}
      </div>
    </div>

    <!-- Action CTA -->
    <div style="text-align: center; margin-top: 24px; padding-top: 16px; border-top: 2px dashed #0D0D0D;">
      <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(data.subject)}" style="display: inline-block; background-color: #FF3D8A; color: #FFFFFF; text-decoration: none; padding: 12px 24px; font-weight: bold; border: 2px solid #0D0D0D; box-shadow: 3px 3px 0px #0D0D0D; font-size: 14px; text-transform: uppercase;">
        Responder a ${safeName} &rarr;
      </a>
    </div>

  </div>
</body>
</html>
  `.trim();

  const text = `
NUEVO MENSAJE DESDE FABRIBAU.TECH
----------------------------------------
Remitente: ${data.name}
Email: ${data.email}
Asunto: ${data.subject}
Idioma: ${data.lang.toUpperCase()}
Fecha: ${dateStr}

MENSAJE:
${data.message}
----------------------------------------
Puedes responder directamente a este correo para escribirle a ${data.email}.
  `.trim();

  return { subject, html, text };
}

/**
 * Genera el correo automático de agradecimiento y confirmación para el usuario.
 */
export function generateAutoresponderEmail(data: ContactFormData) {
  const safeName = escapeHtml(data.name);
  const safeSubject = escapeHtml(data.subject);
  const isSpanish = data.lang === "es";

  const subject = isSpanish
    ? `¡Gracias por contactarme! — Fabrizio Bauer`
    : `Thank you for getting in touch! — Fabrizio Bauer`;

  const heading = isSpanish
    ? `¡Hola ${safeName}! Gracias por tu mensaje.`
    : `Hello ${safeName}! Thank you for your message.`;

  const bodyText1 = isSpanish
    ? `He recibido tu consulta sobre <strong>"${safeSubject}"</strong> con éxito. Reviso mi correo habitualmente y me pondré en contacto contigo a la brevedad.`
    : `I have successfully received your message regarding <strong>"${safeSubject}"</strong>. I regularly check my inbox and will get back to you as soon as possible.`;

  const bodyText2 = isSpanish
    ? `Mientras tanto, podés explorar mis proyectos recientes, artículos o conectar en mis redes profesionales:`
    : `In the meantime, feel free to explore my latest projects, technical articles, or connect through my professional profiles:`;

  const footerText = isSpanish
    ? `Este es un mensaje automático de confirmación enviado desde <a href="https://fabribau.tech" style="color: #0D0D0D; font-weight: bold;">fabribau.tech</a>.`
    : `This is an automated confirmation message sent from <a href="https://fabribau.tech" style="color: #0D0D0D; font-weight: bold;">fabribau.tech</a>.`;

  const html = `
<!DOCTYPE html>
<html lang="${data.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F5F0E8; color: #0D0D0D;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border: 3px solid #0D0D0D; box-shadow: 6px 6px 0px #0D0D0D; padding: 28px;">
    
    <!-- Brand / Header -->
    <div style="background-color: #B4FF39; border: 2px solid #0D0D0D; padding: 12px 16px; margin-bottom: 20px; font-weight: 900; font-size: 16px; text-transform: uppercase; letter-spacing: 0.05em;">
      ⚡ Fabrizio José Riera Bauer &bull; fabribau.tech
    </div>

    <!-- Title & Greeting -->
    <h2 style="font-size: 20px; font-weight: 800; margin: 0 0 16px 0; color: #0D0D0D;">
      ${heading}
    </h2>

    <!-- Body paragraphs -->
    <p style="font-size: 15px; line-height: 1.6; margin: 0 0 14px 0;">
      ${bodyText1}
    </p>

    <p style="font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
      ${bodyText2}
    </p>

    <!-- Quick Links Box -->
    <div style="background-color: #FAFAFA; border: 2px solid #0D0D0D; padding: 16px; margin-bottom: 24px;">
      <ul style="margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.8;">
        <li><a href="https://linkedin.com/in/fabrizio-bauer" style="color: #0D0D0D; font-weight: bold;">LinkedIn: in/fabrizio-bauer</a></li>
        <li><a href="https://github.com/fabribau" style="color: #0D0D0D; font-weight: bold;">GitHub: @fabribau</a></li>
        <li><a href="https://fabribau.tech/${data.lang}/proyectos" style="color: #0D0D0D; font-weight: bold;">${isSpanish ? "Ver Proyectos" : "Explore Projects"}</a></li>
      </ul>
    </div>

    <!-- Sign off -->
    <div style="border-top: 2px solid #0D0D0D; padding-top: 16px; margin-bottom: 16px;">
      <p style="margin: 0; font-size: 15px; font-weight: bold;">Fabrizio José Riera Bauer</p>
      <p style="margin: 4px 0 0 0; font-size: 13px; color: #555555;">
        ${isSpanish ? "Ingeniero en Informática & Desarrollador FullStack" : "Informatics Engineer & FullStack Developer"}
      </p>
    </div>

    <!-- Footer -->
    <p style="margin: 0; font-size: 11px; color: #888888; text-align: center;">
      ${footerText}
    </p>

  </div>
</body>
</html>
  `.trim();

  const text = isSpanish
    ? `
Hola ${data.name},

¡Gracias por tu mensaje! He recibido tu consulta sobre "${data.subject}" con éxito.
Reviso mi correo habitualmente y me pondré en contacto contigo a la brevedad.

Podés ver más sobre mi trabajo en:
- Portfolio: https://fabribau.tech
- LinkedIn: https://linkedin.com/in/fabrizio-bauer
- GitHub: https://github.com/fabribau

Saludos cordiales,
Fabrizio José Riera Bauer
Ingeniero en Informática & Desarrollador FullStack
    `.trim()
    : `
Hello ${data.name},

Thank you for reaching out! I have received your message regarding "${data.subject}".
I check my email regularly and will get back to you as soon as possible.

You can learn more about my work at:
- Portfolio: https://fabribau.tech
- LinkedIn: https://linkedin.com/in/fabrizio-bauer
- GitHub: https://github.com/fabribau

Best regards,
Fabrizio José Riera Bauer
Informatics Engineer & FullStack Developer
    `.trim();

  return { subject, html, text };
}
