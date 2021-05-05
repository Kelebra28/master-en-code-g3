const string = "Hola Mundo";
const fruits = ['apples', 'bananas']

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
}

const reverseStringTwo = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) reject(Error('error'));
    resolve(str.split("").reverse().join(""));
  })
}

describe('Probando funcionalidades de JEST', () => {
  // Contiene en el texto o en el arrelgo
  test('La variable debe de contener un texto', () => {
    expect(string).toMatch(/Mundo/);
  });

  test('La variable no debe de contener un texto', () => {
    expect(string).not.toMatch(/JS/);
  });

  test('El arreglo de frutas tiene bananas', () => {
    expect(fruits).toContain('bananas');
  });

  test('El arreglo de frutas no tiene fresas', () => {
    expect(fruits).not.toContain('strawberries');
  });

  // Booleanos
  test('El valor es verdadero', () => {
    expect(true).toBeTruthy();
  });

  test('El valor es falso', () => {
    expect(false).toBeFalsy();
  });

  // Callbacks
  test('Probar callback', () => {
    reverseString('Hola', (str) => {
      expect(str).toBe('aloH');
    });
  });

  // Promesas
  test('Probar Promesa', () => {
    return reverseStringTwo('Hola')
      .then((string) => {
        expect(string).toBe('aloH');
      });
  });

  // Async/Await
  test('Probar Async/Await', async () => {
     const string = await reverseStringTwo('Hola');
     expect(string).toBe('aloH');
  });
  
});
