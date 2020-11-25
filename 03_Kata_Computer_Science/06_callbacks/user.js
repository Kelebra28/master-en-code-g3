// Declaracion de la Funcion que me va atraer el usuario.
// Tiene dos parametros, 
// id del usuario  que es un numero 
// la funcion que va a llamar que es una funcion
const getUserById = (id, callback) => {
  // Declaramos el objeto User
  const user = {
    name: 'Mikee', // la llave es name y  el valor es Mikee
    id: id // la llave es id y el valor es el id
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
getUserById(
  1, // Id
  // Funcion Anomima que estoy creando, pero no se ejecuta
  (user) => { 
    console.log(user)
  }
)