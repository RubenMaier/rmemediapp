import React, { Component } from 'react'
import Playlist from './playlist'

class Principal extends Component {
    render() {
        const categorias = this.props.categorias
        console.log(categorias)
        return (
            <div>
                {
                    categorias.map((categoria) => {
                        return <Playlist {...categoria} key={categoria.id} />
                    })
                }
            </div>
        )
    }
}

export default Principal