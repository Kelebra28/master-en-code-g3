import { useEffect, useState,  useRef } from 'react';

const  Character = (character) => {
    const {name, image} = character;
    console.log(name)
    return (
      <>
        <h2>nombre: {name} </h2>
        <img src={image} alt={name}/>
      </>
    )
};

const  Characters = () =>  {

     const [characters, setCharacter] = useState({})
     
     const  usePrevious =(value, initialValue) => {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        if (ref.current === undefined && initialValue !== undefined) {
          return initialValue;
        }
        return ref.current;
      }
     const fetchApi = () => {
        fetch('https://rickandmortyapi.com/api/character/1')
        .then(response => response.json())
        .then(data => setCharacter(data));
     }
    
    useEffect(() => {
       
        console.log();
        // fetchApi()
        // if (characters !== prevState.characters) {
        //     setTimeout(() => {
        //       fetchApi()
        //     }, 1000);
        //   }
    })
    console.log(characters)
    return (
      <>
        <h1> Lista de personajes: </h1>

        {/* {characters.map(
          (character) => <Character character={character}/>)
        } */}
          
      </>
    );
  }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.characters !== prevState.characters) {
//       setTimeout(() => {
//         this.fetchApi();
//       }, 1000);
//     }
//   }

export default Characters;