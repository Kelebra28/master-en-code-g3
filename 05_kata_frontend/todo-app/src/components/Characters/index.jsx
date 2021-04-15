import React, { Component } from 'react';

class Character extends Component {
  render() {
    const {name, image} = this.props.character;
    console.log(name)
    return (
      <>
        <h2>nombre: {name} </h2>
        <img src={image} alt="rick"/>
      </>
    )
  }
};

class Characters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: []
    }
  }

  fetchApi = () => {
    fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 671)+1}`)
      .then(response => response.json())
      .then(data => this.setState({ characters: [ ...this.state.characters, data] }));
  }

  componentDidMount() {
    this.fetchApi();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.characters !== prevState.characters) {
      setTimeout(() => {
        this.fetchApi();
      }, 1000);
    }
  }

  render() {
    console.log(this.state.characters)
    return (
      <>
        <h1> Lista de personajes: </h1>

        {this.state.characters.map(
          (character) => <Character character={character}/>)
        }
          
      </>
    );
  }
}

export default Characters;