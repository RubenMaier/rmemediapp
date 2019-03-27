import React from 'react'
import Playlist from '../../playlist/componentes/playlist'
function Categoria(props) {
    return (
        <div>
            <h2>{props.categoria}</h2>
            <Playlist playlist={props.playlist} />
        </div>
    )
}

export default Categoria