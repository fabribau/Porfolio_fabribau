import { describe, it, expect } from 'vitest';
import {
  escapeHtml,
  generateNotificationEmail,
  generateAutoresponderEmail,
} from '../src/lib/contact/email-templates';
import type { ContactFormData } from '../src/lib/contact/schema';

describe('Email Templates Generator', () => {
  const sampleDataES: ContactFormData = {
    name: 'Juan Pérez <test>',
    email: 'juan@example.com',
    subject: 'Consulta sobre proyecto & desarrollo',
    message: 'Hola Fabrizio,\nQuisiera conocer tu disponibilidad para un proyecto web.',
    turnstileToken: 'dummy-token',
    lang: 'es',
  };

  const sampleDataEN: ContactFormData = {
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'FullStack Inquiry',
    message: 'Hi Fabrizio,\nI would like to discuss a potential AI collaboration.',
    turnstileToken: 'dummy-token',
    lang: 'en',
  };

  describe('escapeHtml', () => {
    it('escapa caracteres peligrosos para HTML', () => {
      const raw = `<script>alert('XSS & "injection"')</script>`;
      const escaped = escapeHtml(raw);
      expect(escaped).not.toContain('<script>');
      expect(escaped).toContain('&lt;script&gt;');
      expect(escaped).toContain('&amp;');
      expect(escaped).toContain('&quot;');
      expect(escaped).toContain('&#039;');
    });
  });

  describe('generateNotificationEmail', () => {
    it('genera asunto y contenido HTML/texto seguros para notificación a Fabrizio', () => {
      const { subject, html, text } = generateNotificationEmail(sampleDataES);

      expect(subject).toContain('[Portfolio fabribau.tech]');
      expect(subject).toContain('Consulta sobre proyecto & desarrollo');
      expect(subject).toContain('Juan Pérez <test>');

      // HTML debe escapar tags
      expect(html).toContain('&lt;test&gt;');
      expect(html).toContain('juan@example.com');
      expect(html).toContain('ES');
      expect(html).toContain('mailto:juan@example.com');

      // Texto plano
      expect(text).toContain('NUEVO MENSAJE DESDE FABRIBAU.TECH');
      expect(text).toContain('Juan Pérez <test>');
      expect(text).toContain('juan@example.com');
    });
  });

  describe('generateAutoresponderEmail (Bilingüe)', () => {
    it("genera correo de agradecimiento en Español cuando lang es 'es'", () => {
      const { subject, html, text } = generateAutoresponderEmail(sampleDataES);

      expect(subject).toBe('¡Gracias por contactarme! — Fabrizio Riera Bauer');
      expect(html).toContain('¡Hola Juan Pérez &lt;test&gt;! Gracias por tu mensaje.');
      expect(html).toContain('He recibido tu consulta sobre');
      expect(html).toContain('Ver Proyectos');
      expect(html).toContain('fabribau.tech/es/proyectos');

      expect(text).toContain('Hola Juan Pérez <test>');
      expect(text).toContain('¡Gracias por tu mensaje!');
      expect(text).toContain('Ingeniero en Informática');
    });

    it("genera correo de agradecimiento en Inglés cuando lang es 'en'", () => {
      const { subject, html, text } = generateAutoresponderEmail(sampleDataEN);

      expect(subject).toBe('Thank you for getting in touch! — Fabrizio Riera Bauer');
      expect(html).toContain('Hello John Doe! Thank you for your message.');
      expect(html).toContain('I have successfully received your message');
      expect(html).toContain('Explore Projects');
      expect(html).toContain('fabribau.tech/en/proyectos');

      expect(text).toContain('Hello John Doe');
      expect(text).toContain('Thank you for reaching out!');
      expect(text).toContain('Informatics Engineer');
    });
  });
});
