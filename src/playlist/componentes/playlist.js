import React, { Component } from 'react'
import Media from './media'

class Playlist extends Component {
    render() {
        const categoria = this.props
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
}

export default Playlist