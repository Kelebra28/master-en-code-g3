import { arrayColors, arrayFruits } from '../array';

describe('Comprobemos las frutas', () => {
  test('El array tiene banana', () => {
    expect(arrayFruits()).toContain('banana');
  });
  test('El array no tiene fresas', () => {
    expect(arrayFruits()).not.toContain('fresas');
  });
  test('Comprobar la longitud de el arreglo', () => {
    expect(arrayFruits()).toHaveLength(2);
  });
})