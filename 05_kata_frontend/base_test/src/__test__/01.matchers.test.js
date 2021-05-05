const user = { 
  name: "Mikee",
  lastname: "Ramirez"
};

const user2 = { 
  name: "Angel",
  lastname: "Ramirez"
};

const user3 = { 
  name: "Mikee",
  lastname: "Ramirez"
};

// antes de cada prueba
// beforeEach(() => console.log('antees de cada prueba voy a ejecutarme'));
// beforeAll(() => console.log('antees de todas las pruebas voy a ejecutarme'));
// beforeAll(() => console.log(user));
// beforeAll(() => console.log(user2));
// beforeAll(() => console.log(user3));

// despues de cada prueba
// afterEach(() => console.log('despues de cada prueba voy a ejecutarme'));
// afterAll(() => console.log('despues de todas las pruebas voy a ejecutarme'));

describe('Comparadores comunes', () => {
  // Iguales
  test('Que los objetos sean iguales', () => {
    expect(user).toEqual(user3);
  })
  test('Que los objetos sean difrentes', () => {
    expect(user).not.toEqual(user2);
  })
})