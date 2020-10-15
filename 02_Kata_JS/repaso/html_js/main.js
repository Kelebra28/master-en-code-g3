

// function nombre (parametros) {

// }

function suma (x, z){
    return x + z
}
console.log(suma(10, 5))

//      3       10 ----> 13
suma(suma(1,2), 10)

console.log(suma(suma(1,2), 10))
// suma(100, 50)
// suma(123, 98)

function saludo () {
    var nombre = prompt('Cual es tu nombre')
    return 'Hola como estas' + ' ' + nombre
}

console.log(saludo())


