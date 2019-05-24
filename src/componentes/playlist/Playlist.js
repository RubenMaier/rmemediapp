import React from 'react'
import Media from './Media'
import './playlist.css'

// lo convertimos a un componente "funcional" porque no le hace falta ninguna etapa del ciclo de vida
function Playlist(props) {
    return (
        <div className="Playlist">
            {
                props.playlist.map((item) => {
                    return (
                        <Media
                            {...item}
                            menejoDelClick={props.manejoDeAperturaPorClick}
                            key={item.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default Playlist