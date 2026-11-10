import { describe, it, expect } from 'vitest';
import { celsiusAFahrenheit, fahrenheitACelsius, kmAMillas, millasAKm, kgALibras, librasAKg } from '../src/conversor.js';

describe('Conversor de celsius a fahrenheit', () => {
    it('debería convertir 0°C a 32°F', () => {
        expect(celsiusAFahrenheit(0)).toBe(32);
    });
    it('debería lanzar un error si el valor no es un número', () => {
        expect(() => celsiusAFahrenheit('a')).toThrow('El valor debe ser un número');
    });
    it('-40°C es igual a -40°F (punto de equilibrio)', () => {
    expect(celsiusAFahrenheit(-40)).toBe(-40);
    });
});

describe('Conversor de fahrenheit a celsius', () => {
    it('debería convertir 32°F a 0°C', () => {
        expect(fahrenheitACelsius(32)).toBe(0);
    });
    it('debería lanzar un error si el valor no es un número', () => {
        expect(() => fahrenheitACelsius('a')).toThrow('El valor debe ser un número');
    });
    it('-40°F es igual a -40°C (punto de equilibrio)', () => {
    expect(fahrenheitACelsius(-40)).toBe(-40);
    });
});

describe('Conversor de km a millas', () => {
    it('debería convertir 1 km a 0.621371 millas', () => {
        expect(kmAMillas(1)).toBeCloseTo(0.621371);
    });
    it('debería lanzar un error si el valor no es un número', () => {
        expect(() => kmAMillas('a')).toThrow('El valor debe ser un número');
    });
    it('debería lanzar un error si el valor es negativo', () => {
        expect(() => kmAMillas(-1)).toThrow('El valor debe ser positivo');
    });
});

describe('Conversor de millas a km', () => {
    it('debería convertir 1 milla a 1.60934 km', () => {
        expect(millasAKm(1)).toBeCloseTo(1.60934);
    });
    it('debería lanzar un error si el valor no es un número', () => {
        expect(() => millasAKm('a')).toThrow('El valor debe ser un número');
    });
    it('debería lanzar un error si el valor es negativo', () => {
        expect(() => millasAKm(-1)).toThrow('El valor debe ser un número y tiene que ser positivo');
    });
});

describe('Conversor de kg a libras', () => {
    it('debería convertir 1 kg a 2.20462 libras', () => {
        expect(kgALibras(1)).toBeCloseTo(2.20462);
    });
    it('debería lanzar un error si el valor no es un número', () => {
        expect(() => kgALibras('a')).toThrow('El valor debe ser un número');
    });
    it('debería lanzar un error si el valor es negativo', () => {
        expect(() => kgALibras(-1)).toThrow('El valor debe ser un número');
    });
});

describe('Conversor de libras a kg', () => {
    it('debería convertir 1 libra a 0.453592 kg', () => {
        expect(librasAKg(1)).toBeCloseTo(0.453592);
    });
    it('debería lanzar un error si el valor no es un número', () => {
        expect(() => librasAKg('a')).toThrow('El valor debe ser un número');
    });
    it('debería lanzar un error si el valor es negativo', () => {
        expect(() => librasAKg(-1)).toThrow('El valor debe ser un número');
    });
});
