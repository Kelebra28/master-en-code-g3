import React, { useState, useEffect } from 'react';
import listaDeCanciones from './listaCanciones.json';

// Crear un contexto.
const SongContext = React.createContext();

// Crear el provider y la función retorna el componente provicer del context
function SongProvider(props) {
    // Lógica de como va a funcionar mi contexto
    
    const [lista, setList] = useState([]);
    const [selectedSong, setSelectedSong] = useState({});

    useEffect(() => {
        // Simulamos la petición al backend que tarda 1seg.
        setTimeout(() => {
            setList(listaDeCanciones);
        }, 1000)
    }, []);


    const value = {
        lista,
        selectedSong,
        setSelectedSong,
    }
    // Provider el value para funcionar
    // value: Son los datos o funciones globales y accesibles.
    
    return <SongContext.Provider value={value} {...props} />
}

// Consumidor del contexto
// Quien quiera utilizar el estado del contexto tiene que ejecutar esta función
const useSongContext = () => {
    const context = React.useContext(SongContext);
    return context;
};

export  {
    SongProvider,
    useSongContext,
}