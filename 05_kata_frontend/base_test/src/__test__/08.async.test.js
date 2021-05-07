import { getDataFromApi } from '../promise';

let results;

beforeAll(async () => {
  results = await getDataFromApi("https://rickandmortyapi.com/api/character");
})

describe('Probando async/await metodos', () => {
  test('Realizar una petcion a una API', () => {
    const length = results.length;
   
    expect(length).toBeGreaterThan(0);
  });

  test('Verificar el nombre del primer elemento sea Rick Sanchez', () => {
    const { name: rick } = results[0];
    // console.log(results[0])

    expect(rick).toEqual('Rick Sanchez');
  });
});

describe('Probar error de api', () => {
  test('Realizando peticion que traiga un error', async () => {
    const apiError = 'http://httpstat.us/500';
    const peticion = getDataFromApi(apiError);

    await expect(peticion).rejects.toEqual(Error('Request failed with status code 500'))
  })
})

