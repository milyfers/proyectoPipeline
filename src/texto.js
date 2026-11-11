export function esPalindromo(texto) {
  if (typeof texto !== 'string') {
    throw new Error('El texto debe ser un string');
  }
  const limpio = texto.toLowerCase().replaceAll(' ', '');
  if (limpio.length === 0) {
    return false;
  }
  return limpio === limpio.split('').reverse().join('');
}

export function crearSlug(texto) {
  if (typeof texto !== 'string') {
    throw new Error('El texto debe ser un string');
  }
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') 
    .replace(/[^a-z0-9]+/g, '-') 
    .replace(/^-+|-+$/g, ''); 
}

export function contarPalabras(texto) {
  if (typeof texto !== 'string') {
    throw new Error('El texto debe ser un string');
  }
  const limpio = texto.trim();
  if (limpio === '') {
    return 0;
  }
  return limpio.split(/\s+/).length;
}