import React from 'react'
import Playlist from '../playlist/Playlist'
import './categoria.css'

function Categoria(props) {
    return (
        <div className="Categoria">
            <h2 className="Categoria-titulo">{props.categoria}</h2>
            <Playlist
                playlist={props.playlist}
                manejoDeAperturaPorClick={props.manejoDeAperturaPorClick}
            />
        </div>
    )
}

export default Categoria