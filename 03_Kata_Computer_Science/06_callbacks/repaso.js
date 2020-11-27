
const banco = (retiro, cantidad) => {
   let cuenta = 1000
//    1000 - 100
    //callback
        retiro(cuenta, cantidad)
}

banco((cuenta,cantidad) => {
   console.log(`Tu dinero restante es: ${cuenta - cantidad} 💸`)
}, 100)

// const suma = (x, y) => {
//     console.log(x + y)
// }

// suma(10, 50)

