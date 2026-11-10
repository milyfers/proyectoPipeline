export function validarCorreo(correo) {
    if (typeof correo !== 'string') {
        throw new Error('El correo debe ser texto');
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

export function validarPassword(password) {
    if (typeof password !== 'string') {
        throw new Error('La contraseña debe ser texto');
    }

    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
}

export function validarCurp(curp) {
    if (typeof curp !== 'string') {
        throw new Error('La CURP debe ser texto');
    }

    const regex = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/;
    return regex.test(curp);
}