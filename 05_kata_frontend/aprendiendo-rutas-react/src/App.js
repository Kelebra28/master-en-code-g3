import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import Home from './Home';
import NotFound from './NotFound'

function About() {
  return <h2>About page</h2>;
}

const NavBar = () => (
<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/page/about">About</Link>
    </li>
    <li>
      <Link to="/users">Users</Link>
    </li>
    <li>
      <a href="http:/page/about" target="_blank" rel="noopener noreferrer"> Afuera</a>
    </li>
  </ul>
</nav>
);

function App() {
  // Ejemplo de componente switch explicado a metodo JS
  // const ruta = 'Home'
  // switch (ruta) {
  //   case 'Home':
  //     console.log('hola')
  //     break;
  //   default:
  //     console.log('no es home')
  //     break;
  // }
  return (
    // Si voy a usar react router dom, el primer componente que voy a a llamar va hacer <Router />
    // Router me va a permitir detectar las URL's
    <Router>
      <NavBar/>
      <div>
        {/* Switch  me va permitir identicar las URL y pintar el componente adecuado */}
        <Switch>
          {/* Adentro de Switch siempre va ir la Route */}
          {/* Creacion de Rutas por path */}
            {/* Cuanto entren al path "/" deber de pintar el componente home */}
          <Route exact sensitive path={["/", "/home", "/inicio", "/hola"]}>
            <Home/>
          </Route>
            {/* Usando la propiedad component, solo necesito mandarle como estoy importando el componente */}
          <Route exact path="/page/about" component={About} />
            {/* Cuanto entren al path "/404" deber de pintar el componente NotFound */}
            {/*  Usando la propiedad Render, tenemos que enviarle el componente como una funcion */}
          <Route exact path="/404" render={() => <NotFound/>} />
          {/* Redirect si no existe la ruta adonde quiero ir, y este
          seria mi default del switch y siempre va a el final*/}
          <Redirect push to="/404"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
