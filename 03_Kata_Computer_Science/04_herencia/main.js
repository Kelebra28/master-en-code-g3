// SuperClase / Clase padre
class Mascota {
     constructor(nombre, patas){

        this.nombre = nombre
        this.patas = patas
     }

     comer(){
         return `${this.nombre} esta comiendo`
     }     
}

//subclase /clase hija

class Perrito extends Mascota {
    constructor (nombre, patas, colorPelaje){
        super(nombre, patas)
        this.colorPelaje = colorPelaje
    }

    ladran(){
        return 'woooooooowf'
    }
};

const Perrito1 = new Perrito('Misha', 4, 'cafe');
console.log(Perrito1)
console.log(Perrito1.comer())
console.log(Perrito1.ladran())

//Crear 3 subclases de difentes macotas :) 