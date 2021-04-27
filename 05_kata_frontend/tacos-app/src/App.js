import './App.scss';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import Routes from './Routes'
import NavBar from './components/NavBar'

function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
        <main>
          <Routes />
        </main>
        </Switch>
       
      </Router>
  );
}

export default App;
