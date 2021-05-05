import { isFalse, isNull, isTrue, isUndefined } from '../boolean';

describe('Probar resultados null', () => {
  test('null', () => {
    expect(isNull()).toBeNull();
  });
});

describe('Probar resultados verdaderos', () => {
  test('verdadero', () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe('Probar resultados falsos', () => {
  test('falso', () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe('Probar resultados no verdaderos', () => {
  test('Falso', () => {
    expect(isFalse()).not.toBeTruthy();
  });
});

describe('Probar resultados indefinidos', () => {
  test('indefinidos', () => {
    expect(isUndefined()).toBeUndefined();
  });
});