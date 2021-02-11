
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



// const cuantosPokemones = (pedir) => {
//     const pokemon = [
//         {
//             name: 'Pikachu',
//             type: 'Electrico'
            
//         },
//         {
//             name: 'Ditto',
//             type: 'Mitico'
            
//         }
//     ]    
//     if(pedir(pokemon)){
//         console.log('Se hizo la peticion')
//         console.log( pedir(pokemon))

//     }else{
//         console.error('Hubo un error')
//     }
    
// }
// cuantosPokemones((pokemon) => {
//     for(let i = 2; i < pokemon.length; i++  ){
//         return pokemon[i]
//     }
// })


// Funcion tiempoComer  -> va a esperar un callback para saber dependiendo de la comida, que hora es. 

const tiempoComer = (horario, alimento) => {


    if(horario(alimento) === 'Cereal'){
        console.log('Desayuno')
    }else if (horario(alimento) === 'Pozole'){
        console.log('Comida')
    }else if(horario(alimento) === 'Cafe'){
        console.log('Cena')
    }else{
        console.log('Come mejor')
    }
}

tiempoComer((alimento) =>{
    return alimento
}, 'Chocolate')
