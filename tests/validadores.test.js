import { describe, it, expect } from 'vitest';

import {
    validarCorreo,
    validarPassword,
    validarCurp
} from '../src/validadores.js';

describe('Pruebas de validarCorreo', () => {
    it('Acepta un correo válido', () => {
        expect(validarCorreo('prueba@gmail.com')).toBe(true);
    });

    it('Rechaza un correo sin @', () => {
        expect(validarCorreo('pruebagmail.com')).toBe(false);
    });

    it('Rechaza un correo sin dominio', () => {
        expect(validarCorreo('prueba@')).toBe(false);
    });

    it('Rechaza un texto vacío', () => {
        expect(validarCorreo('')).toBe(false);
    });

    it('Lanza error si recibe un número', () => {
        expect(() => validarCorreo(123)).toThrow();
    });
});

describe('Pruebas de validarPassword', () => {
    it('Acepta una contraseña válida', () => {
        expect(validarPassword('HolaMundo123')).toBe(true);
    });

    it('Rechaza una contraseña corta', () => {
        expect(validarPassword('Abc123')).toBe(false);
    });

    it('Rechaza una contraseña sin mayúscula', () => {
        expect(validarPassword('holamundo123')).toBe(false);
    });

    it('Rechaza una contraseña sin número', () => {
        expect(validarPassword('HolaMundo')).toBe(false);
    });

    it('Rechaza una contraseña vacía', () => {
        expect(validarPassword('')).toBe(false);
    });
});

describe('Pruebas de validarCurp', () => {
    it('Acepta una CURP con formato válido', () => {
        expect(validarCurp('GODE561231HDFRRN09')).toBe(true);
    });

    it('Rechaza una CURP corta', () => {
        expect(validarCurp('GODE561231')).toBe(false);
    });

    it('Rechaza una CURP con letras minúsculas', () => {
        expect(validarCurp('gode561231HDFRRN09')).toBe(false);
    });

    it('Rechaza una CURP vacía', () => {
        expect(validarCurp('')).toBe(false);
    });

    it('Lanza error si recibe un número', () => {
        expect(() => validarCurp(123)).toThrow();
    });
});