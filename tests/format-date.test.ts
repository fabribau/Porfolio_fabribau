import { describe, it, expect } from 'vitest';
import { formatDate } from '../src/i18n/utils';

describe('formatDate utility', () => {
  it('formatea fechas sin retroceder un día por zona horaria local (caso 2025-12-12)', () => {
    // 2025-12-12 parseada como UTC midnight
    const date = new Date('2025-12-12');

    const formattedEs = formatDate(date, 'es');
    expect(formattedEs).toContain('12');
    expect(formattedEs.toLowerCase()).toContain('diciembre');
    expect(formattedEs).toContain('2025');

    const formattedEn = formatDate(date, 'en');
    expect(formattedEn).toContain('12');
    expect(formattedEn).toContain('December');
    expect(formattedEn).toContain('2025');
  });

  it('respeta opciones personalizadas como año y mes corto', () => {
    const date = new Date('2025-12-12');

    const formattedEsShort = formatDate(date, 'es', { year: 'numeric', month: 'short' });
    expect(formattedEsShort.toLowerCase()).toContain('dic');
    expect(formattedEsShort).toContain('2025');

    const formattedEnShort = formatDate(date, 'en', { year: 'numeric', month: 'short' });
    expect(formattedEnShort).toContain('Dec');
    expect(formattedEnShort).toContain('2025');
  });

  it('formatea con día, mes corto y año correctamente', () => {
    const date = new Date('2024-10-31');

    const formattedEs = formatDate(date, 'es', { year: 'numeric', month: 'short', day: 'numeric' });
    expect(formattedEs).toContain('31');
    expect(formattedEs.toLowerCase()).toContain('oct');
    expect(formattedEs).toContain('2024');

    const formattedEn = formatDate(date, 'en', { year: 'numeric', month: 'short', day: 'numeric' });
    expect(formattedEn).toContain('31');
    expect(formattedEn).toContain('Oct');
    expect(formattedEn).toContain('2024');
  });
});
