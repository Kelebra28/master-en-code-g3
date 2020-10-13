

// ----------------------->Array o Arreglos<---------------------


// posicion     0       1        2       
var color = ['Azul', 'Verde', 'Naranja'];

// console.log(color);
// console.log(color[1]);
// console.log(color[2]);

// -------- Metodos ------
// .push()
// Empuja un nuevo valor en la ultima posicion
color.push('Negro');
color.push('Blanco');
color.push('Rosa');
// console.log(color);

// .pop()
// Eliminar el ultimo valor

color.pop();
color.pop();
// console.log(color);


//---------------------->Objectos o Objects<-------------------------
 
// var objecto = {}
var persona = {
    nombre: 'Ricardo',
    edad: 22,
    cel: '+52 3546513579684',
    musica: {
        banda: 'Banda MS',
        kpop: 'K-pop',
        rock: 'Kiss',
        trap: {
            duki :'Modo diablo',
        }
    },
    peliculas: ['RF1', 'RF2', 'RF3', 'RF10']
};

// console.log(persona.edad);
// console.log(persona.nombre);
// console.log(persona.musica.trap.duki)
// console.log(persona.peliculas[2])


// Arrglo de objetos

var animales = [
    {
        nombre: 'Vaca',
        comida: true
    },
    {
        nombre: 'Aguila',
        comida: false
    },
    {
        nombre: 'Ballena',
        comida: false
    },
    {
      nombre: 'Murcielago',
      comida: true,
    }
];

// Van a recorrer un  arreglo y devolver cada elemento de el