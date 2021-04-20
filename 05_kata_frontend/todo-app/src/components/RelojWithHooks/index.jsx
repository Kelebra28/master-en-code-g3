import { useEffect, useState } from 'react';

const Reloj = () => {
  const [pokemon, setPokemon] = useState('...Loading');
  const [timer, setTimer] = useState(new Date().toLocaleTimeString())
  const [visible, setVisible] = useState(false)

  useEffect( () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => response.json())
      .then(data => setPokemon(data.name));
  }, []);

  useEffect( () => {
    console.log(timer)
    setTimeout(() => {
      setTimer(new Date().toLocaleTimeString())
    }, 1000);
  }, [timer]);

  return (
    <>
      <h2> Reloj </h2>

      {visible && <h3> Hora actual: {timer} </h3> }
      
      {visible ? <h3> Hora actual: {timer} </h3> : <h3>Estoy escondio</h3> }

      <button onClick={ () => setVisible(true)}> Mostrar</button>
      <button onClick={ () => setVisible(false)}> Ocultar</button>

      <h3>
        Pokemon: {pokemon}
      </h3>
    </>
  );
}

export default Reloj;
