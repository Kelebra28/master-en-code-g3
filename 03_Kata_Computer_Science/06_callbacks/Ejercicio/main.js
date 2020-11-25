const { empleados, salarios } = require('./data');

const getEmployeeById = (id, callback) => {
  const empleadoDB = empleados.find(
    (empleado) => empleado.id === id
  )

  if (!empleadoDB) {
    return callback('No existe informacion de ese ID 🍷')
  } 
  return callback(null, empleadoDB)
}

const getSalarioById = (id, callback) => {
  // Codigo para traerme el salario
}

getEmployeeById(4, (error, empleado) => {
  if (error) {
    return console.log('error', error);
  }
  console.log(empleado)
})

getSalarioById(1, () => {})