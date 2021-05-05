import { suma } from '../math';

describe('Comparacion de numeros', () => {
  test('Mayor que', () => {
    expect(suma(2,2)).toBeGreaterThan(3);
  });
  test('Mayor que o igual', () => {
    expect(suma(2,2)).toBeGreaterThanOrEqual(4);
  });
  test('Menor que', () => {
    expect(suma(2,2)).toBeLessThan(5);
  });
  test('Menor que o igual', () => {
    expect(suma(2,2)).toBeLessThanOrEqual(4);
  });
  test('Numeros flotantes', () => {
    expect(suma(.2,.2)).toBeCloseTo(.4);
  });
})