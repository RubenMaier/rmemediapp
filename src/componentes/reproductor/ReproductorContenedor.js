import React, { Component } from 'react'
import Reproductor from './Reproductor'
import VideoContenedor from './VideoContenedor'
import Titulo from './Titulo'
import PlayPausa from './PlayPausa'
import Tiempo from './Tiempo'
import BarraDeControles from './BarraDeControles'

class ReproductorContenedor extends Component {
    state = {
        pausa: true,
        duracion: 0
    }
    CambiarEstadoDeReproduccion = (evento) => {
        this.setState({
            pausa: !this.state.pausa
        })
    }
    controlarMetadata = (evento) => {
        // cuando la metadata sea cargada el "evento" contendrá quien disparo ese evento (en este caso es videoContenedor)
        this.video = evento.target
        console.log(evento.target)
        this.setState({
            duracion: this.video.duration
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
                <BarraDeControles>
                    <PlayPausa 
                        pausa={this.state.pausa}
                        manejadorDeClick={this.CambiarEstadoDeReproduccion}
                    />
                    <Tiempo 
                        duracion={this.state.duracion}
                    />
                </BarraDeControles>
                <VideoContenedor
                    sonido={true}
                    autoreproduccion={this.props.autoreproduccion}
                    pausa={this.state.pausa}
                    metadata={this.controlarMetadata}
                    mp4="https://rubenmaier.github.io/api-simplificada-trailers-marvel/mp4/the-avengers.mp4"
                />
            </Reproductor>
        )
    }
}

export default ReproductorContenedor