import React from 'react'
import Media from './media'

// lo convertimos a un componente "funcional" porque no le hace falta ninguna etapa del ciclo de vida
function Playlist(props) {
    return (
        <div>
            {
                props.playlist.map((item) => {
                    return <Media {...item} key={item.id} />
                })
            }
        </div>
    )
}

export default Playlist