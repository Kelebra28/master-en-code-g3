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
var submit = document.getElementById('submit');
var form = document.getElementById('form');
var exampleInputEmail1 = document.getElementById('exampleInputEmail1');
var exampleInputPassword1 = document.getElementById('exampleInputPassword1');
var exampleCheck1 = document.getElementById('exampleCheck1');

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
// button.addEventListener('mouseenter', function () { 
//   button.classList.replace('green', 'red')
// })

// // Funcion para cambiar de colores cuando el mouse sale
// button.addEventListener('mouseleave', function () {
//   button.classList.replace('red', 'green')
// })

// // Funcion de estar presionando una tecla
// input.addEventListener('keydown', function () {
//    console.log('estoy tecleando.')
//  })

// // Funcion de estar presionando una tecla y saber que tecla es
// input.addEventListener('keydown', function (event) {
//   console.log(event.key)
//   //  console.log('estoy tecleando.')
//  })


// Funcion para validar los campos del formulario antes de enviarlos
form.addEventListener('submit', function (event) {
  // Previene las opciones por defecto de el evento, en este caso no envia el formulario ni recarga la pagina
  event.preventDefault();
  var input = exampleInputEmail1.value;
  var password = exampleInputPassword1.value;
  var check = exampleCheck1.checked
  console.log(check)
  // Validacion para ver si existe un elemento.
  if (!check) {
    alert('tienes que aceptar los terminos y condiciones')
  }
  if  (password === '12345678') {
    alert('no puede ser tan sencillo')
  }
})