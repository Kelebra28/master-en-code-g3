import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './views/home';
import Blog from './views/blog';
import Contact from './views/contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Redirect push to="/" />
      </Switch>
    </Router>
  );
}

export default App;
