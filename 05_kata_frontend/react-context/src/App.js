import React from 'react';
import './App.css';
import ListaCanciones from './ListaCanciones';
import DetalleCancion from './DetalleCancion';
import { SongProvider } from './SongContext';

function App() {

  return (
    <div className="App">
      <SongProvider>
              <div className="izquierdo">
                <ListaCanciones />
              </div>
              <div className="derecho">
                <DetalleCancion  />
              </div>
      </SongProvider>
    </div>
  );
}

export default App;
