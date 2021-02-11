
// let player1 = prompt('Ingresa piedra, papel o tijera').toLowerCase();
// let player2 = prompt('Ingresa piedra, papel o tijera').toLowerCase();


// if(player1 === 'piedra' && player2 === 'tijera' || player1 === 'tijera' && player2 === 'papel' || player1 === 'papel' & player2 === 'piedra'){
//     console.log(`Gano el jugador 1 porque ${player1} le gana a ${player2}`);
// } else if (player2 === 'piedra' && player1 === 'tijera' || player2 === 'tijera' && player1 === 'papel' || player2 === 'papel' && player1 === 'piedra') {
//     console.log(`Gano el jugador 2 porque ${player2} le gana a ${player1}`)
// }else{
//     console.error('Datos incorrectos, intentalo de nuevo');
// }




for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i}: FizBuzz`)
    }else if (i % 5 === 0) {
        console.log(`${i}: Buzz`)
    }else if (i % 3 === 0) {
        console.log(`${i}: Fizz`)
    }else{
        console.log(i)
    }
}
