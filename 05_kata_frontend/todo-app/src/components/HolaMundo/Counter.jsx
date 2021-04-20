import { useState, useEffect } from 'react'


const CounterHook = () => {
    const [number, setNumber] = useState(0)
    const [click, setClick] = useState(0)
    const date = new Date().toLocaleDateString();
    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/1')
            .then(response => response.json())
            .then(data => console.log(data));
    }, [])

    useEffect(() => {
        console.log(`Me estoy renderizando`);
    });

    useEffect(() => {
        console.log(`Les has hecho click  ${click} veces`);
    }, [click]);

    const sumar = () => {
        setNumber(number + 1)
        // setClick(click + 1)
    }

    const restar = () => {
        setNumber(number - 1)
        // setClick(click + 1)
    }
    const reinicar = () => {
        setNumber(0)
        setClick(click + 1)
    }

    return (
        <> 
            <h1>Contador usando Hooks</h1>
            <h2>Hoy es {date} </h2>
            <h3>{number === 0 ? 'No tienes cuenta' : number}</h3>
            <button onClick={ sumar }>Sumas</button>
            <button onClick={ restar }>Restar</button>
            <button onClick={ reinicar } >Reinicar</button>
        </>
    )

}
// -> hook
// -> HOC


export default CounterHook