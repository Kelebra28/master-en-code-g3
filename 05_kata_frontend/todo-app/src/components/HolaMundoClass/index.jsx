import React, { Component } from 'react';

class HolaMundoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: 'Hola a todos desde el estado',
      edad: 30,
    }
  }

  componentDidMount() {
    console.log('Se monta el componente');
    setTimeout(
      () => {
        this.setState(
          {
            texto: 'Se actualizo el componente.'
          }
        )
      },
      3000
    )
  }

  render() {
    console.log('RENDER')
    const { texto, edad } = this.state;
    return (
      <>
        <h1> Componente Hola Mundo </h1>
        {/* <h2> {this.state.texto} </h2>
        <h2> {this.state.edad} </h2> */}
        <h2> {texto} </h2>
        <h2> {edad} </h2>
      </>
    );
  }
}

export default HolaMundoClass;