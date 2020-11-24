// const name = "Mikee";

// console.log(`Hola ${name}`);

// // const a = 10;
// // const b = 20;

// // console.log('resultado: ', a + b);

// // function saludar(name) {
// //   console.log(name);
// //   let mensaje =  `Hola ${name}`;
// //   return mensaje;
// // }
// // console.log('no he ejecutado la funcion')
// // let saludo = saludar('Mikee');
// // console.log('ya termino de ejecutarse la funcion')

// // console.log(saludo)

// console.log('Incio del programa');

// setTimeout(() => {
//   console.log('Primer timeout')
// }, 1000);

// setTimeout(() => {
//   console.log('Segundo timeout')
// }, 0);

// setTimeout(() => {
//   console.log('Tercer timeout')
// }, 0);

// console.log('Fin del programa');
// var index = 1

// Var Global
// for (index = 1; index <= 5; index++) {
//   console.log(index)
// }
// for (index; index <= 5; index++) {
//   console.log(index)
// }
// // console.log(index)

// // var index = 2
// // console.log(index)

// let definido por el scope
// for (let index = 1; index <= 5; index++) {
//   console.log(index)
// }
// for (let index = 1; index <= 5; index++) {
//   console.log(index)
// }

// Const = constante
// Error por que no se puede cambiar su valor
// for (const index = 1; index <= 5; index++) {
//   console.log(index)
// }

// const name = "MIKEE";
// name = "haha";

// const name = ["MIKEE"];
// console.log(name)
// name.pop();
// console.log(name)

// const persona = {
//   nombre: 'mikee'
// }
// console.log(persona)
// persona.edad = 30
// console.log(persona)
// // persona.delete(nombre)
// delete persona.nombre;
// delete persona.edad;

// console.log(persona)

// Template strings
// const name = 'Mike'
// console.log('Hola mi nombre es: \n' + name,
// "\ntengo 30",
// "\nsoy developer",
// "\nasfasfafs", );

// console.log(`Hola mi nombre es: 
// ${name} 
// tengo 30
// soy developer
// asfasfafs
// `);

// const collection = [ 
//   {
//     id: 1,
//     title: 'The notebokke'
//   },
//   {
//     id: 2,
//     title: 'Marvel'
//   }
// ];

// const myId = 2;

// const search = collection.find( (item) => item.id === myId).title

// console.log(`Book title: ${search}`)

// const str = 'la donna e mobile';

// console.log(`${str.toUpperCase()} `);

// const a = 10
// const b = 20

// console.log(`El resultado de la suma es: ${ a + b }`)

// Operador ternario
// const book = {
//   id: 1,
//   title: false,
//   year: 2007
// }
// let valor = "" 
// if (book.title) {
//   valor = 'hey tengo un titulo'
// } else {
//   valor = 'hey no tengo un titulo'
// }

// const valor = 
//   book.title // La condicion
//     ? 'hey tengo un titulo' // Si la condicion es verdadera
//     : 'hey no tengo un titulo'; // Si la condicion es falsa

// const valor = book.title ? book.title : 'no hay titulo';

// console.log(`Reporte de libro: ${valor}`);

// Operador Logico
// console.log(`Book year: ${ book.year || 'Desconocido'}`)

// Destructuring 
// const collection = [ 
//   {
//     id: 1,
//     title: 'The notebokke'
//   },
//   {
//     id: 2,
//     title: 'Marvel'
//   },
//   {
//     id: 3,
//     title: 'DC'
//   },
//   {
//     id: 4,
//     title: 'Dark'
//   }
// ];

// const [ primero, segundo, ...resto ] = collection

// console.log('primero', primero),
// console.log(segundo)
// console.log(resto)

// const [ restante1, restante2 ] = resto

// console.log(restante1)

// const { title } = primero;

// console.log('titulo:', title)

// const { title: title2 } = segundo;

// console.log('titulo:', title2)

const collection = {
  objeto:
  {
    id: 1,
    title: 'The notebokke'
  },
  objeto2:
  {
    id: 2,
    title: 'Marvel'
  },
  objeto3:
  {
    id: 3,
    title: 'DC'
  },
  objeto4:
  {
    id: 4,
    title: 'Dark'
  }
};

const { objeto4: { title }, ...rest} = collection;

console.log(title)