/* 
document.getElementById('id') - Acceder a un elemento a través de su id

document | document.querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

document | document.querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/


// var title = document.getElementById('title');

// // title.textContent = 'Hola a todos'
// // console.log(title);

// var paragraph = document.querySelector('.paragraph:nth-child(3)');

// console.log(paragraph);

// var prueba = document.querySelector('H1>SPAN');

// var prueba = title.querySelector('SPAN:nth-child(1)');

// console.log(prueba);

var paragrahps = document.querySelectorAll('.paragraph');

paragrahps[1].style.color = 'red';
// paragrahps[2].style.color = 'red';

console.log(paragrahps);

var paragraphsArray = Array.from(paragrahps);
// Estamos convirtiendo un nodelist con el metodo Array.from

paragraphsArray.push(1);
console.log(paragraphsArray);

// var paragraphsSpread = [...paragrahps]
// console.log(paragraphsSpread);