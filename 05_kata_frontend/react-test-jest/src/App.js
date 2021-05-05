import React, { Component } from 'react';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello title='Hello Jest' />
      </div>
    );
  }
}

export default App;
