import React, { Component } from 'react';

class Character extends Component {
  render() {
    return (
      <>
        <h2>nombre: rick </h2>
        <img src="https://rickandmortyapi.com/api/character/avatar/671.jpeg" alt="rick"/>
      </>
    )
  }
}

class Characters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/1')
      .then(response => response.json())
      .then(data => this.setState({ characters: [ ...this.state.characters, data] }));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(3, 'El estado o las props han cambiado');
    // console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (this.state.characters !== prevState.characters) {
      setTimeout(() => {
        fetch('https://rickandmortyapi.com/api/character/2')
          .then(response => response.json())
          .then(data => this.setState({ characters: [ ...this.state.characters, data] }));
      }, 10000);
    }
  }

  render() {
    console.log(this.state.characters)
    return (
      <>
        <h1> Lista de personajes: </h1>
          
        <Character />
      </>
    );
  }
}

export default Characters;