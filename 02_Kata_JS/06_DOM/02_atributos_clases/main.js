/* 
Atributos
    element.getAttribute('attribute') Obtener un atributo de el elemento
    element.setAttribute('attribute', value) Cambiar o agregar un atributo del elemento

Clases
    element.classList.add('class','class',...) agrega clases al elemnto
    element.classList.remove('class','class',...) remover claqses al elemento
    element.classList.contains('class') - Pregunta si tiene una clase en especifico y te devuelve true o false
    element.classList.replace('oldClass', newClass)
    
    element.classList.toggle('class'[,force])

atributos directos
    id
    value
*/

var title = document.getElementById('title');
var firstName = document.getElementById('name');

// Modificando el texto del elemento
// title.textContent = "Me estan modificando desde JS";

// console.log(title);
// console.log(title.getAttribute('type'));

// Como obtener todos los atributos de un elemento.
// console.log(firstName.attributes);


// console.log(firstName.getAttribute('type'));
// Modificar o agregar atributos, con el nombre del atributo y su valor
// firstName.setAttribute('type', 'number');
// console.log(firstName.getAttribute('type'));
// 
// function suma(n1,n2) {
//   return n1+n2
// } 

// firstName.setAttribute('value', suma(2,3));
// firstName.setAttribute('value', 6);

// console.log(firstName.attributes);

// console.log(title.attributes);

// Obtener todas las clases de el elemento
// console.log(title.classList)

// console.log(title.classList.contains('azul'));

// title.classList.add('verde', 'azul')

// console.log(title.classList)

// title.classList.remove('verde', 'azul', 'title', 'rojo')

// console.log(title.classList)

// console.log(title.classList.contains('azul'));

// title.classList.replace('title', 'azul')
// console.log(title.classList)

// console.log(firstName)