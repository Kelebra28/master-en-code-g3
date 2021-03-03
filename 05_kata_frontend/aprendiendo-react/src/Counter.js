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
        {/* En jsx la apertura de llaves significa que habra codigo de js que devolvera un valor */}
        <h1>{this.props.title}</h1>
        </>
    )
}

}

export default Counter;
