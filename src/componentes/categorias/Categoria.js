import React from 'react'
import Playlist from '../playlist/Playlist'

function Categoria(props) {
    return (
        <div>
            <h2>{props.categoria}</h2>
            <Playlist
                playlist={props.playlist}
                manejoDeAperturaPorClick={props.manejoDeAperturaPorClick}
            />
        </div>
    )
}

export default Categoria