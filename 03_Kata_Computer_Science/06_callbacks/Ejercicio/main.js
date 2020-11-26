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

const getSalarioById = (empleado, callback) => {
  const { id, name } = empleado;
  // Codigo para traerme el salario
  const salarioDB = salarios.find(
    (salario) => salario.id === id
  )

  if (!salarioDB) {
    return callback('No existe informacion de ese salario 🍷')
  }

  const newEmpleado = {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    ...salarioDB, // Spread Sintaxis 
    name
  }

  return callback(null, newEmpleado)
}

getEmployeeById(2, (error, empleado) => {
  if (error) {
    return console.log('error', error);
  }
  getSalarioById(empleado, (otroError, salario) => {
    if (otroError) {
      return console.log('error', otroError);
    }
    return console.log(salario)
  })
})