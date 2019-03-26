import React from 'react'
import Media from './media'

// lo convertimos a un componente "funcional" porque no le hace falta ninguna etapa del ciclo de vida
function Playlist(props) {
    const categoria = props
    console.log(categoria)
    return (
        <div key={categoria.id}>
            <div>{categoria.categoria}</div>
            <div>{
                categoria.playlist.map((item) => {
                    return <Media {...item} key={item.id} />
                })
            }</div>
        </div>
    )
}

export default Playlist