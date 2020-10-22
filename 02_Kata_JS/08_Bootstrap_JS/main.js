/* 
Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón
Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/

var button = document.getElementById('button');
var input = document.getElementById('input');

//Funcion para escuchar cuando le de click mouse
// button.addEventListener('click', function () { 
//   console.log('estoy dando click.')
// })

//Funcion para escuchar cuando le de dbl click mouse
// button.addEventListener('dblclick', function () {
//   console.log('estoy dando doble click.')
// })

//Funcion para escuchar cuando entre el mouse
// button.addEventListener('mouseenter', function (params) {
//   console.log('estoy sobre la zona')
// })

// Creando funcion con nombre ()
// function funcionDeEntradaDelMouse() {
//   console.log('estoy sobre la zona')
// }

// Llamando a la funciuon con nombre
// button.addEventListener('mouseenter', funcionDeEntradaDelMouse)

// Funcion para cambiar de colores cuando el mouse entra
button.addEventListener('mouseenter', function () { 
  button.classList.replace('green', 'red')
})

// Funcion para cambiar de colores cuando el mouse sale
button.addEventListener('mouseleave', function () {
  button.classList.replace('red', 'green')
})

// Funcion de estar presionando una tecla
input.addEventListener('keydown', function () {
   console.log('estoy tecleando.')
 })
