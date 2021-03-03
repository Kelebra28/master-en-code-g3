/* eslint-disable no-useless-constructor */
// --> El componente siempre inicia con mayusculas
// --> Importar React
// --> El componente y el archivo se deben llamar igual
// --> Exportar el componente

import React from 'react';

class Counter extends React.Component {


constructor(props){
    // El constructor recibe como argumento las propiedades -> props
    // Atributos asignados cuando llamamos el componente en un componente padre
    super(props);
}

render(){
    return (
        <>
        <h1>Hola es mi contador </h1>
        </>
    )
}

}

export default Counter;
