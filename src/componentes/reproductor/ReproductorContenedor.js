import React, { Component } from 'react'
import Reproductor from './Reproductor'
import Video from './Video'
import Titulo from './Titulo'
import PlayPausa from './PlayPausa'

class ReproductorContenedor extends Component {
    state = {
        pausa: true
    }
    manejadorDeClick = (evento) => {
        this.setState({
            pausa: !this.state.pausa
        })
    }
    render() {
        return (
            <Reproductor>
                <Titulo 
                    titulo="Algo harcodeado"
                />
                <PlayPausa 
                    pausa={this.state.pausa}
                    manejadorDeClick={this.manejadorDeClick}
                />
                <Video
                    sonido={true}
                    autoreproduccion={true}
                    mp4="https://rubenmaier.github.io/api-simplificada-trailers-marvel/mp4/the-avengers.mp4"
                />
            </Reproductor>
        )
    }
}

export default ReproductorContenedor