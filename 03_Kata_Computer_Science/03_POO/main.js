// --------> POO <------
class Animal  {
    // Atributo
    constructor(nombre, edad, color , raza, tipo){
      //Animal.nombre
        this.nombre = nombre
        this.edad = edad
        this.color = color
        this.raza = raza
        this.tipo = tipo
    };
    //Metodo 
    dormir() {
        return `Mi mascota llamdo ${this.nombre} duerme porque ya tiene ${this.edad}`
    };

    comer(){
        return `${this.nombre} ayer se comio una galleta`
    };
};

const miMascota = new Animal('Misha', 3, 'cafe', 'cruza', 'perro');
const miMascota2 = new Animal('Poppy', 5);

console.log(miMascota);
console.log(miMascota.dormir());
console.log(miMascota2);
console.log(miMascota2.dormir());

// Crer una clase llamda Atomovil , y van a tener 3 propiedades, color, marca, deportivo
// 2 metodos (los que ustedes quieran)

// Crear 3 carros distintos,

