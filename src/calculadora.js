function validarNumero(valor, nombre) {
  if (typeof valor !== 'number' || !Number.isFinite(valor)) {
    throw new TypeError(`${nombre} debe ser un número`);
  }
  if (valor < 0) {
    throw new RangeError(`${nombre} no puede ser negativo`);
  }
}

function redondear(valor) {
  return Math.round(valor * 100) / 100;
}

export function calcularIva(monto, tasa = 16) {
  validarNumero(monto, 'monto');
  validarNumero(tasa, 'tasa');
  return redondear(monto * (tasa / 100));
}

export function aplicarDescuento(precio, porcentaje) {
  validarNumero(precio, 'precio');
  validarNumero(porcentaje, 'porcentaje');
  if (porcentaje > 100) {
    throw new RangeError('porcentaje no puede ser mayor a 100');
  }
  return redondear(precio - precio * (porcentaje / 100));
}

export function calcularInteres(capital, tasa, meses) {
  validarNumero(capital, 'capital');
  validarNumero(tasa, 'tasa');
  validarNumero(meses, 'meses');
  if (!Number.isInteger(meses)) {
    throw new TypeError('meses debe ser un número entero');
  }
  return redondear(capital * (tasa / 100) * (meses / 12));
}