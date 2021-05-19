import { CounterProvider } from '../CounterContext';
import Counter from './Counter'
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterProvider>
          <Counter />
        </CounterProvider>
      </header>
    </div>
  );
}

export default App;
