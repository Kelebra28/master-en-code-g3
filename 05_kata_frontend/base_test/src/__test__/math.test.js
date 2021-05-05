// const suma = require('../suma');
import { dividir, multiplicar, resta, suma } from '../math';

describe('Probemos la funcion suma', () => {
  // suma
  test('Vamos a sumar 1 + 2 para que el resultado sea 3', () => {
    expect(suma(1, 2)).toBe(3);
  });
});

describe('Probemos la funcion resta', () => {
  // resta
  test('Vamos a restar 1 - 2 para que el resultado no sea 3', () => {
    expect(resta(1, 2)).not.toBe(3);
  });
});

describe('Probemos la funcion dividir', () => {
  // dividir
  test('Vamos a dividir 30 / 3 para que el resultado no sea 9', () => {
    expect(dividir(30, 3)).not.toBe(9);
  });
});

describe('Probemos la funcion multiplicar', () => {
  // multiplicar
  test('Vamos a multiplar 3 * 10 para que el resultado no sea 30', () => {
    expect(multiplicar(3, 10)).not.toBe(3);
  });

  test('Vamos a multiplar 3 * 10 para que el resultado no sea 30', () => {
    expect(multiplicar(3, 10)).toBe(30);
  });
});