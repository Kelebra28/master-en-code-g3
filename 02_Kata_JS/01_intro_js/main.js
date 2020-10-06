// Tipo de variables

var numerico = 10;
var cadena = "cadena de texto";
var boleano = true;
var negativo = false;

console.log("Tipo de variables");
console.info("valor", numerico, typeof numerico);
console.error("valor", cadena, typeof cadena);
console.warn("valor", boleano, typeof boleano);
console.log("valor", negativo, typeof negativo);

var num1 = 100;
var num2 = 200;

var suma = num1 + num2;
console.log("resultado de la suma =", suma);

console.log('Hola yo me voy a poner en la consola');
alert('Hola yo me voy a poner en un cuadro de alerta ');

console.log("nombre", nombre);
var nombre = prompt("Cual es tu nombre ?");
console.log("nombre", nombre);

var numero = "45";
console.log("valor", numero, typeof numero);
numero = Number(numero);
console.log("valor", numero, typeof numero);

var numero = "e";
console.log("valor", numero, typeof numero);
numero = Number(numero);
console.log("valor", numero, typeof numero);
