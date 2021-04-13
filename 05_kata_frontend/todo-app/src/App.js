import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import HolaMundoClass from './components/HolaMundoClass';
import HolaMundo from './components/HolaMundo';

import './App.css';

const NotFound = () => {
  return <h2> Not Found </h2>
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
             <HolaMundo texto="Hola soy un stateless component"/>
            </Route>
            <Route exact path="/class" component={HolaMundoClass}/>
            <Route exact path="/notFound" render={() => <NotFound/>} />
            
            <Redirect push to="/notFound" />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
