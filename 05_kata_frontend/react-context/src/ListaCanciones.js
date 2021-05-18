import React from 'react';
import { useSongContext } from './SongContext';

function ListaCanciones({ lista }) {
    // Consumir el contexto y traerlo
    const songGlobalState = useSongContext();
    // console.log(songGlobalState);
    return (
        <div>
            <h1>Esta es la lista de canciones jeje</h1>
            {
                songGlobalState.lista.length > 0 &&
                songGlobalState.lista.map((cancion) => {
                    return <h5 
                            key={cancion.title}
                            onClick={() => {
                                songGlobalState.setSelectedSong(cancion);
                            }}>
                            {cancion.title}
                        </h5>
                })
            }
        </div>
    )
};

export default ListaCanciones;
