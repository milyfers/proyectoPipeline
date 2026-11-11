import { describe, it, expect } from 'vitest';
import { esPalindromo, crearSlug, contarPalabras } from '../src/texto.js';

describe('esPalindromo', () => {
  it('regresa true con un palíndromo simple', () => {
    expect(esPalindromo('anita lava la tina')).toBe(true);
  });

  it('regresa true sin importar las mayúsculas', () => {
    expect(esPalindromo('Oso')).toBe(true);
  });

  it('regresa false con un texto normal', () => {
    expect(esPalindromo('hola')).toBe(false);
  });

  it('regresa false con un texto vacío', () => {
    expect(esPalindromo('')).toBe(false);
  });

  it('regresa false con solo espacios', () => {
    expect(esPalindromo('   ')).toBe(false);
  });

  it('lanza error si no es un texto', () => {
    expect(() => esPalindromo(123)).toThrow();
  });
});

describe('crearSlug', () => {
  it('convierte espacios en guiones y minúsculas', () => {
    expect(crearSlug('Hola Mundo')).toBe('hola-mundo');
  });

  it('quita los acentos', () => {
    expect(crearSlug('Hola Mundo Útil')).toBe('hola-mundo-util');
  });

  it('quita espacios de más', () => {
    expect(crearSlug('  hola   mundo  ')).toBe('hola-mundo');
  });

  it('regresa texto vacío si no hay texto', () => {
    expect(crearSlug('')).toBe('');
  });

  it('lanza error si no es un texto', () => {
    expect(() => crearSlug(123)).toThrow();
  });
});

describe('contarPalabras', () => {
  it('cuenta las palabras de un texto normal', () => {
    expect(contarPalabras('hola mundo')).toBe(2);
  });

  it('cuenta una sola palabra', () => {
    expect(contarPalabras('hola')).toBe(1);
  });

  it('ignora los espacios de más', () => {
    expect(contarPalabras('  hola    mundo ')).toBe(2);
  });

  it('regresa 0 con un texto vacío', () => {
    expect(contarPalabras('')).toBe(0);
  });

  it('regresa 0 con solo espacios', () => {
    expect(contarPalabras('   ')).toBe(0);
  });

  it('lanza error si no es un texto', () => {
    expect(() => contarPalabras(123)).toThrow();
  });
});