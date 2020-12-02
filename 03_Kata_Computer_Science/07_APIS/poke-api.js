const request = require('request');

request.get('https://pokeapi.co/api/v2/pokemon/200', (error, response, body) =>{
    if (response.statusCode === 200) {
        const data = JSON.parse(body);
        // console.log(data);
        console.log(`${data.name} 🥰`);

    }else{
        console.error(`🚫 Ocurrio un error en la peticion 🚫 ${error}`);
    }
});


