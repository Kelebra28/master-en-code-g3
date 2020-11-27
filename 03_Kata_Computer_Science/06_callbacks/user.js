// Declaracion de la Funcion que me va atraer el usuario.
// Tiene dos parametros, 
// id del usuario  que es un numero 

const { fuchsia } = require("color-name");

// la funcion que va a llamar que es una funcion
const getUserById = (callback) => {
  // Declaramos el objeto User
  const user = {
    name: 'Mikee', // la llave es name y  el valor es Mikee
    id: 1 // la llave es id y el valor es el id
  };

  // const user = {
  //   name: 'Mikee', // la llave es name y  el valor es Mikee
  //   id // Si el valor es igual a la llave se puede omitir
  // };

  // console.log('funcion', callback)
  callback(user); // Ejecutamos la funcion y le pasamos el parametro
}


// Mando a llamar la funcion, 
// Necesito enviarle los parametros en el orden que lo esta solicitanndo la funcion
const fun = (user) => {
  console.log(user)
}


getUserById(fun)

const suma =  (x, y) =>{
  return x + y
}

suma(10, 50)
console.log(suma(10, 50))

const comer = (gusto) => {
  // bloque de codigo
  const fruta = {
    name:'Sandia',
    sabor: 'Delicioso'
  }
  const fruta2 = {
    name: 'Melon',
    sabor: 'No'
  }
  gusto(fruta)
  gusto(fruta2)
}
comer((frutas) => {
  console.log(frutas)
})
