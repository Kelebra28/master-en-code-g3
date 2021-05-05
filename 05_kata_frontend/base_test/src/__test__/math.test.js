// const suma = require('../suma');
import { resta, suma } from '../math';

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