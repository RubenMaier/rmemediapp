import React, { Component } from 'react'
import Reproductor from './Reproductor'
import VideoContenedor from './VideoContenedor'
import Titulo from './Titulo'
import PlayPausa from './PlayPausa'
import Tiempo from './Tiempo'
import BarraDeControles from './BarraDeControles'
import {formatearTiempo} from '../../utilidades/tiempo'
import BarraDeProgreso from './BarraDeProgreso';

class ReproductorContenedor extends Component {
    state = {
        pausa: true,
        duracion: 0
    }
    cambiarEstadoDeReproduccion = (evento) => {
        this.setState({
            pausa: !this.state.pausa
        })
    }
    actualizarDuracionTotal = (evento) => {
        // cuando la metadata sea cargada el "evento" contendrá quien disparo ese evento (en este caso es videoContenedor)
        this.video = evento.target // el target contiene el elemento del DOM que emitió el evento
        this.setState({
            duracion: this.video.duration // extraigo la duracion total del video y la almaceno en una variable local para actualizar la barra de controles
        })
    }
    actualizarTiempoTranscurrido = (evento) => {
        this.setState({
            tiempoTranscurrido: this.video.currentTime
        })
    }
    actualizarProgreso = (evento) => {
        this.video.currentTime = evento.target.value // cambio al tiempo transcurrido por el tiempo que elegí haciendo click
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
                        manejadorDeClick={this.cambiarEstadoDeReproduccion}
                    />
                    <Tiempo 
                        duracion={formatearTiempo(this.state.duracion)}
                        tiempoTranscurrido={formatearTiempo(this.state.tiempoTranscurrido)}
                    />
                    <BarraDeProgreso
                        duracion={this.state.duracion}
                        tiempoTranscurrido={this.state.tiempoTranscurrido}
                        onChange={this.actualizarProgreso}
                    />
                </BarraDeControles>
                <VideoContenedor
                    sonido={true}
                    autoreproduccion={this.props.autoreproduccion}
                    pausa={this.state.pausa}
                    onLoadedMetadata={this.actualizarDuracionTotal}
                    onTimeUpdate={this.actualizarTiempoTranscurrido}
                    mp4="https://rubenmaier.github.io/api-simplificada-trailers-marvel/mp4/the-avengers.mp4"
                />
            </Reproductor>
        )
    }
}

export default ReproductorContenedor