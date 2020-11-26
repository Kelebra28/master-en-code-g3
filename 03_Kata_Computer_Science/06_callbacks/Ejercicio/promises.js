const { empleados, salarios } = require('./data');

const getEmployeeById = (id) => {
  return new Promise((resolve, reject) => {
    const empleadoDB = empleados.find(
      (empleado) => empleado.id === id
    )
  
    if (!empleadoDB) {
      return reject('No existe informacion de ese ID 🍷')
    } 

    return resolve(empleadoDB)
  })
};

getEmployeeById(5)
  .then((empleado) => console.log(empleado))
  .catch((reject) => console.log(reject));
