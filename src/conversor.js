export function celsiusAFahrenheit(c) {
  if (typeof c !== 'number') {
    throw new Error('El valor debe ser un número');
  }
  return (c * 9) / 5 + 32;
}

export function fahrenheitACelsius(f) {
    if (typeof f !== 'number'){
        throw new Error('El valor debe ser un número');
    }
    return (f - 32) * 5 / 9;
}

export function kmAMillas(km){
    if (typeof km !== 'number' ){
        throw new Error ('El valor debe ser un número');
    }
    else if (km < 0){
        throw new Error ('El valor debe ser positivo');
    }
    return km * 0.621371;
}

export function millasAKm(mi){
    if (typeof mi !== 'number' || mi < 0){
        throw new Error ('El valor debe ser un número y tiene que ser positivo');
    }
    return mi / 0.621371;
}

export function kgALibras(kg) {
    if (typeof kg !== 'number'){
        throw new Error ('El valor debe ser un número');
    }
    else if (kg < 0){
        throw new Error ('El valor debe ser un número');
    }
    return kg * 2.20462;
}

export function librasAKg(lb) {
    if (typeof lb !== 'number') {
        throw new Error('El valor debe ser un número');
    }
    else if (lb < 0) {
        throw new Error('El valor debe ser un número positivo');
    }
    return lb / 2.20462;
}