const request = require('request');

// request.get('https://pokeapi.co/api/v2/pokemon/200', (error, response, body) =>{
//     if (response.statusCode === 200) {
//         const data = JSON.parse(body);
//         // console.log(data);
//         console.log(`${data.name} 🥰`);

//     }else{
//         console.error(`🚫 Ocurrio un error en la peticion 🚫 ${error}`);
//     }
// });


const pedirPokemon = (pokemon) => {
    request.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, (error, response, body) =>{
        if (response.statusCode === 200) {
            const data = JSON.parse(body);
            // console.log(data);
            console.log(`${data.name} 🥰`);

        }else{
            console.error(`🚫 Ocurrio un error en la peticion 🚫 ${error}`);
        }
    });
}

pedirPokemon('ditto');
pedirPokemon(500)


// Hacer una funcion que haga una petición 
// (Ejemplo: peticionLibro(“i robot”);
// Buscar un libro y traer el o los autores del primer libro

// http://openlibrary.org/search.json?q=i+robot) 