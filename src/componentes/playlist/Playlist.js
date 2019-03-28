import React from 'react'
import Media from './Media'

// lo convertimos a un componente "funcional" porque no le hace falta ninguna etapa del ciclo de vida
function Playlist(props) {
    return (
        <div>
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