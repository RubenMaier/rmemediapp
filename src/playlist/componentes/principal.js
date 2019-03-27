import React, { Component } from 'react'
import Playlist from './playlist'
import Play from '../../iconos/componentes/play'
import Pausa from '../../iconos/componentes/pausa'
import Volumen from '../../iconos/componentes/volumen'
import PantallaCompleta from '../../iconos/componentes/pantalla-completa'

class Principal extends Component {
    render() {
        const categorias = this.props.categorias
        console.log(categorias)
        return (
            <div>
                <Play
                    color="red"
                    alto={50}
                    ancho={50}
                />
                <Pausa
                    color="red"
                    alto={50}
                    ancho={50}
                />
                <Volumen
                    color="red"
                    alto={50}
                    ancho={56}
                />
                <PantallaCompleta
                    color="red"
                    alto={50}
                    ancho={60}
                />
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