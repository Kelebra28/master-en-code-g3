

// if (condiocion) {
//     accion en caso de que se cumpla
// } else {
//     accion en caso de que no se cumpla
// }

// operadores relaciones
// <  --> menor que
// <=  --> menor igual
// >  --> mayor que
// >= --> mayor igual
//  =  --> declar 
// 🚫 ==  --> comparar |no usar| 🚫
//  === --> comprara identica mente
// !==  -> diferente de  

var numero = 10;

if (numero !==  10) {   
    console.log('Es verdad');
} else {
    // console.error('Es falso');
}

// Se puede econtrar de esta manera 🤯
// if (numero === '10') console.log('Es verdad') 
// else console.log('Error')

// modulo  %  --> residuo de la divison

// --------- Challenge 1 -----------

// van a preguntar al usuario un numero y van a poner en la consola
// el numero y si es par o impar
// 1: impar
// 2: par
// Que pasa si el usuario pone letra x error 

// var preguntaNumero = prompt('Ingresa un numero');

// var numeroVerdadero = Number(preguntaNumero);

if (numeroVerdadero % 2 === 0 ) {
    console.log(numeroVerdadero + ': es par')
} else if (numeroVerdadero % 2 === 1) {
    console.log(numeroVerdadero + ': es impar')
} else {
    console.error('No es un numero')
}


// Operdadores Logicos
// &&  --> and
// ||  -> or

// es menor -> no puedes conducir
// si tienes 16 o 17 -> puedes sacar el permiso
// si eeres mayo de edad -> puedes sacar el permiso


var edadPregunta = prompt('Que edad tienes');

var edadNumero = Number(edadPregunta);


if (edadNumero >= 18 && edadNumero <= 80) {
    console.log('Puedes conducir :)')
} else if (edadNumero === 16 || edadNumero === 17) {
    console.log('Puedes sacar tu permiso para conducir chaval :)')
} else if (edadNumero <= 15 || edadNumero > 80 ) {
    console.warn('No puedes conducir por tu seguridad')
} else {
    console.error('No es una edad');
}

//-------- Challenge 2 --------
// Juego de piedra papel o tijera ✂️ ⛰ 📃
// Preguntar a 2 usuarios que opcion eleguir
// Mostrar en consola que jugador gano




