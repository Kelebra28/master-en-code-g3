const suma = require('../suma');


describe('Probemos la funcion suma', () => {
  // Numericos
  test('Vamos a sumar 1 + 2 para que el resultado sea 3', () => {
    expect(suma(1, 2)).toBe(3);
  });
  
  test('Vamos a sumar 2 + 2 para que el resultado sea mayor 3', () => {
    expect(suma(2, 2)).toBeGreaterThan(3);
  });
});