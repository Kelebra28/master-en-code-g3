import React from 'react';
import { useSongContext } from './SongContext';

function DetalleCancion() {
    const songGlobalState = useSongContext();

    return (
        <div>
            <h1>Aquí esta toda la info de la rolita</h1>
            {
                songGlobalState.selectedSong.title 
                ? 
                    (
                        <div>
                            <h1>{songGlobalState.selectedSong.title}</h1>
                            <h4>{songGlobalState.selectedSong.artist}</h4>
                        </div>
                    ) 
                : <h1>Selecciona una canción</h1>
            }
        </div>
    )
};

export default DetalleCancion;
