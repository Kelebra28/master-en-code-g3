// import HolaMundoClass from './components/HolaMundoClass';
import HolaMundo from './components/HolaMundo';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <HolaMundoClass /> */}
        <HolaMundo texto="Hola soy un stateless component"/>
      </header>
    </div>
  );
}

export default App;
