/* 
Atributos
    element.getAttribute('attribute')
    element.setAttribute('attribute', value)

Clases
    element.classList.add('class','class',...)
    element.classList.remove('class','class',...)
    element.classList.contains('class')
    element.classList.replace('oldClass', newClass)
    
    element.classList.toggle('class'[,force])
atributos directos
    id
    value
*/

var title = document.getElementById('title');
var firstName = document.getElementById('name');
// console.log(title);
// console.log(title.getAttribute('type'));

// Como obtener todos los atributos de un elemento.
console.log(firstName.attributes);


console.log(firstName.getAttribute('id'))
