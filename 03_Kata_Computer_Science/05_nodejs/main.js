// const name = "Mikee";

// console.log(`Hola ${name}`);

// const a = 10;
// const b = 20;

// console.log('resultado: ', a + b);

// function saludar(name) {
//   console.log(name);
//   let mensaje =  `Hola ${name}`;
//   return mensaje;
// }
// console.log('no he ejecutado la funcion')
// let saludo = saludar('Mikee');
// console.log('ya termino de ejecutarse la funcion')

// console.log(saludo)

console.log('Incio del programa');

setTimeout(() => {
  console.log('Primer timeout')
}, 1000);

setTimeout(() => {
  console.log('Segundo timeout')
}, 0);

setTimeout(() => {
  console.log('Tercer timeout')
}, 0);

console.log('Fin del programa');
