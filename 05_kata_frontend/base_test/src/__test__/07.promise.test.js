import { getDataFromApi, reverseStringTwo } from '../promise';

describe('Probando peticiones', () => {
  test('Realizando una peticion a una API', (done) => {
    const miApi = "https://rickandmortyapi.com/api/character";

    getDataFromApi(miApi).then( (data) => {
      expect(data.length).toBeGreaterThan(0);
      done();
    });
  });

  test('Probar Promesa', () => {
    return reverseStringTwo('Hola')
      .then((string) => {
        expect(string).toBe('aloH');
      });
  });

  test('Resueve un hola', () => {
    return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!')
  });

  test('Resueve un error', () => {
    return expect(Promise.reject('Error!')).rejects.toBe('Error!')
  })
});