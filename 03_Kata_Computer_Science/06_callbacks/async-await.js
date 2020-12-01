
// ------ callback-----

const { fuchsia } = require("color-name")

const pedirUsuarioC = (req, res) => {

    // -> tarda en hacer
    Usuario.buscarID(req.UsuraioID, (err, user) => {
         if(err){
            console.log('Error en el servidor')
         } else {
             // -> va a tardar
             Edad.buscarEdad(user.edad, (err, edad) => {
                 if(err){
                     console.log('Error al buscar la edad')
                 }else{
                     edad === true
                 }
             })
         }
    })

}

// --- Promesas----


const pedirUsuarioP = (req, res) => {
    Usuario.buscarID(req.UsuraioID)
    .then((user)=>{
        return  Edad.buscarEdad(user.edad)
    })
    .then((edad) => {
        edad === true
    })
    .catch((error) => {
        res.send(error)
    })
}



//------->🔥 async-await 🔥<-----

const pedirUsuarioAA = async (req, res) => {

    try {
        const User = await Usuario.buscarID(req.UsuraioID)
        const Age = await Edad.buscarEdad(user.edad)
        edad ===  true
    }catch (error){
        res.send(error)
    }

  
}