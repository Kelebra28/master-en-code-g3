import { useEffect, useState } from 'react'
import axios from 'axios'
import Tacos from './Tacos'

const Peticiones =  () => {
    const [taco, setTaco] = useState({})
    const tacosApi = 'http://taco-randomizer.herokuapp.com/random/'
    console.log(taco);
    const getTaco = async () => {
        try {
            const reponse = await axios.get(tacosApi)
            setTaco(reponse.data)
            console.log(reponse.data);
        }
        catch (error) {
            alert('Ocurrío un error al pedir el taco :(')
        }
    }

    useEffect(() => {
        setTimeout(getTaco, 1500)
    }, [])

    return(
        <>
        <h1>Tacos</h1>
        { taco.condiment ?
          <Tacos taco={taco} />
          : <span>Estamos Eligiendo un taco para ti</span>
        }
        </>
    )

}

export default Peticiones



// export default function Peticiones {

// }