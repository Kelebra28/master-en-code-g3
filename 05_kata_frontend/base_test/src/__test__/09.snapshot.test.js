import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Voy a realizar un snapshot', () => {
  test('Snapshot de mi objeto json', () => {
    const character = getCharacter(rick);
    
    expect(character).toMatchSnapshot();
  })

  // test('Siempre falla la captura', () => {
  //   const user  = {
  //     createAt: new Date(),
  //     id: Math.floor(Math.random() * 20)
  //   }

  //   expect(user).toMatchSnapshot();
  // })

  test('Realizar excepciones dentro de la captura', () => {
    const user  = {
      name: "Mikee Ramirez",
      id: Math.floor(Math.random() * 20)
    };

    expect(user).toMatchSnapshot({
      id: expect.any(Number),
    })
  })
})