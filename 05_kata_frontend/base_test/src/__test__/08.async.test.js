import { resolvePlugin } from '@babel/core';
import { getDataFromApi } from '../promise';

let results;

beforeAll(async () => {
  const miApi = "https://rickandmortyapi.com/api/character";
  results = await getDataFromApi(miApi);
})

describe('Probando async/await metodos', () => {
  test('Realizar una petcion a una API', () => {
    const length = results.length;
    expect(length).toBeGreaterThan(0);
  });

  test('Verificar el nombre del primer elemento sea Rick Sanchez', () => {
    const { name: rick } = results[0];

    expect(rick).toEqual('Rick Sanchez');
  });
});

