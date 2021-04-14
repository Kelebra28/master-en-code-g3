import React, { Component } from 'react';

class Reloj extends Component {

  componentWillUnmount() {
    console.log(4, "El componente ha sido eliminado del DOM")
  }

  render() {
    return <h3> Hora actual: {this.props.hora} </h3>
  }
}

class CicloDeVida extends Component {
  constructor(props){
    super(props);
    console.log(0, ' El componengte se inicializa, aun no esta en el DOM');
    this.state = { 
      hora: new Date().toLocaleTimeString(),
      pokemon: 'Loading',
      visible: false
    }
  }

  componentDidMount() {
    console.log(2, 'Componente ya montado en el DOM');
    setTimeout(() => {
      this.setState({
        hora: new Date().toLocaleTimeString()
      })
    }, 3000);
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => response.json())
      .then(data => this.setState({ pokemon: data.name }));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(3, 'El estado o las props han cambiado');
    // console.log('prevProps', prevProps);
    // console.log('prevState', prevState);
    if (this.state.hora !== prevState.hora) {
      setTimeout(() => {
        this.setState({
          hora: new Date().toLocaleTimeString()
        })
      }, 1000);
    }
  }

  render() {
    // console.log(1, 'El componente se dibuja en el DOM')
    // console.log(this.state.hora)
    return (
      <>
        <h2> Ciclo De Vida </h2>

        {this.state.visible && <Reloj hora={this.state.hora} />}

        <button onClick={() => {
          this.setState({
            visible: true
          })
        }}> Mostrar</button>

        <button onClick={() => {
          this.setState({
            visible: false
          })
        }}> Ocultar</button>

        <h3>
          Pokemon: {this.state.pokemon}
        </h3>
      </>
    );
  }
}

export default CicloDeVida;