import './App.css';
import Counter from './Counter'

const number2 = 0;

const App = () => (
  <div className="App">
    <header className="App-header">
    <Counter 
      title="Soy el contador en app" 
      init="0" 
      secondary={number2}
    />
    {/* <Counter title="Segundo Contador"/> */}
    </header>
  </div>
);

export default App;
