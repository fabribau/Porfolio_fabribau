import { describe, it, expect } from 'vitest';
import { validateContactForm } from '../src/lib/contact/schema';

describe('Contact Form Validation Schema (Zod)', () => {
  const validPayload = {
    name: 'Fabrizio Riera Bauer',
    email: 'test@fabribau.tech',
    subject: 'Propuesta de Proyecto',
    message: 'Hola, me gustaría conversar sobre una oportunidad de desarrollo FullStack e IA.',
    turnstileToken: 'dummy-valid-token-123',
    lang: 'es',
  };

  it('acepta un payload completamente válido en español', () => {
    const result = validateContactForm(validPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe('Fabrizio Riera Bauer');
      expect(result.data.email).toBe('test@fabribau.tech');
      expect(result.data.lang).toBe('es');
    }
  });

  it('acepta un payload válido en inglés', () => {
    const result = validateContactForm({
      ...validPayload,
      lang: 'en',
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.lang).toBe('en');
    }
  });

  it("asigna 'es' como idioma por defecto si no se especifica", () => {
    const { lang, ...withoutLang } = validPayload;
    const result = validateContactForm(withoutLang);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.lang).toBe('es');
    }
  });

  it('normaliza el email a minúsculas y elimina espacios en blanco', () => {
    const result = validateContactForm({
      ...validPayload,
      name: '  Fabrizio Riera Bauer  ',
      email: '  TEST.CAPS@FABRIBAU.TECH  ',
      subject: '  Consulta general  ',
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe('Fabrizio Riera Bauer');
      expect(result.data.email).toBe('test.caps@fabribau.tech');
      expect(result.data.subject).toBe('Consulta general');
    }
  });

  describe('Validaciones de Nombre', () => {
    it('falla si el nombre tiene menos de 2 caracteres', () => {
      const result = validateContactForm({ ...validPayload, name: 'A' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errors.name).toBeDefined();
      }
    });

    it('falla si el nombre excede los 100 caracteres', () => {
      const result = validateContactForm({ ...validPayload, name: 'A'.repeat(101) });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errors.name).toBeDefined();
      }
    });
  });

  describe('Validaciones de Email', () => {
    it.each([
      'email-invalido',
      'usuario@',
      '@dominio.com',
      'usuario@dominio',
      'usuario con espacios@dominio.com',
    ])("falla con el formato de email inválido '%s'", (invalidEmail) => {
      const result = validateContactForm({ ...validPayload, email: invalidEmail });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errors.email).toBeDefined();
      }
    });
  });

  describe('Validaciones de Asunto', () => {
    it('falla si el asunto tiene menos de 3 caracteres', () => {
      const result = validateContactForm({ ...validPayload, subject: 'Hi' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errors.subject).toBeDefined();
      }
    });

    it('falla si el asunto excede los 150 caracteres', () => {
      const result = validateContactForm({ ...validPayload, subject: 'A'.repeat(151) });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errors.subject).toBeDefined();
      }
    });
  });

  describe('Validaciones de Mensaje', () => {
    it('falla si el mensaje tiene menos de 10 caracteres', () => {
      const result = validateContactForm({ ...validPayload, message: 'Corto' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errors.message).toBeDefined();
      }
    });

    it('falla si el mensaje excede los 3000 caracteres', () => {
      const result = validateContactForm({ ...validPayload, message: 'A'.repeat(3001) });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errors.message).toBeDefined();
      }
    });
  });

  describe('Validaciones de Turnstile Token', () => {
    it('falla si el token de turnstile está vacío', () => {
      const result = validateContactForm({ ...validPayload, turnstileToken: '' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errors.turnstileToken).toBeDefined();
      }
    });
  });
});
