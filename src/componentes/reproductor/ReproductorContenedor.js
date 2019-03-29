import React, { Component } from 'react'
import Reproductor from './Reproductor'
import VideoContenedor from './VideoContenedor'
import Titulo from './Titulo'
import PlayPausa from './PlayPausa'

class ReproductorContenedor extends Component {
    state = {
        pausa: true
    }
    CambiarEstadoDeReproduccion = (evento) => {
        this.setState({
            pausa: !this.state.pausa
        })
    }
    componentDidMount () {
        this.setState({
            pausa: (!this.props.autoreproduccion)
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
                    manejadorDeClick={this.CambiarEstadoDeReproduccion}
                />
                <VideoContenedor
                    sonido={true}
                    autoreproduccion={this.props.autoreproduccion}
                    pausa={this.state.pausa}
                    mp4="https://rubenmaier.github.io/api-simplificada-trailers-marvel/mp4/the-avengers.mp4"
                />
            </Reproductor>
        )
    }
}

export default ReproductorContenedor