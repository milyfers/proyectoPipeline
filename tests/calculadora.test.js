import { describe, it, expect } from 'vitest';
import { calcularIva, aplicarDescuento, calcularInteres } from '../src/calculadora.js';

describe('calcularIva', () => {
  it('calcula el 16% por defecto', () => {
    expect(calcularIva(100)).toBe(16);
  });

  it('acepta una tasa distinta', () => {
    expect(calcularIva(200, 8)).toBe(16);
  });

  it('redondea a 2 decimales', () => {
    expect(calcularIva(10.55)).toBe(1.69);
  });

  it('regresa 0 si el monto es 0', () => {
    expect(calcularIva(0)).toBe(0);
  });

  it('lanza error con monto negativo', () => {
    expect(() => calcularIva(-50)).toThrow(RangeError);
  });

  it('lanza error si el monto no es número', () => {
    expect(() => calcularIva('100')).toThrow(TypeError);
  });

  it('lanza error con NaN', () => {
    expect(() => calcularIva(NaN)).toThrow(TypeError);
  });
});

describe('aplicarDescuento', () => {
  it('aplica un descuento del 20%', () => {
    expect(aplicarDescuento(100, 20)).toBe(80);
  });

  it('con 0% regresa el mismo precio', () => {
    expect(aplicarDescuento(250, 0)).toBe(250);
  });

  it('con 100% regresa 0', () => {
    expect(aplicarDescuento(250, 100)).toBe(0);
  });

  it('lanza error si el porcentaje es mayor a 100', () => {
    expect(() => aplicarDescuento(100, 150)).toThrow(RangeError);
  });

  it('lanza error con porcentaje negativo', () => {
    expect(() => aplicarDescuento(100, -10)).toThrow(RangeError);
  });

  it('lanza error si el precio es vacío', () => {
    expect(() => aplicarDescuento('', 10)).toThrow(TypeError);
  });
});

describe('calcularInteres', () => {
  it('calcula interés simple de 12 meses', () => {
    expect(calcularInteres(1000, 10, 12)).toBe(100);
  });

  it('calcula interés de 6 meses', () => {
    expect(calcularInteres(1000, 12, 6)).toBe(60);
  });

  it('regresa 0 con 0 meses', () => {
    expect(calcularInteres(1000, 10, 0)).toBe(0);
  });

  it('lanza error si los meses no son enteros', () => {
    expect(() => calcularInteres(1000, 10, 1.5)).toThrow(TypeError);
  });

  it('lanza error con capital negativo', () => {
    expect(() => calcularInteres(-1000, 10, 12)).toThrow(RangeError);
  });

  it('lanza error si falta un argumento', () => {
    expect(() => calcularInteres(1000, 10)).toThrow(TypeError);
  });
});