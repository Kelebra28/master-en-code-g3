const text = 'Hello World';
beforeAll(() => console.log(text.length))
describe('Comprobamos cadenas de texto (aka strings)', () => {
  
  test('debe contener el siguiente texto', () => {
    expect(text).toMatch(/World/);
  });

  test('debe tener una longitud igual a 11', () => {
    expect(text).toHaveLength(11);
  });

  test('debe tener una longitud superior a 5', () => {
    const lengthText = text.length;
    expect(lengthText).toBeGreaterThan(5);
  });
})