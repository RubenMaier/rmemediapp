import React, { Component } from 'react'
import Reproductor from './Reproductor'
import VideoContenedor from './VideoContenedor'
import Titulo from './Titulo'
import PlayPausa from './PlayPausa'
import Tiempo from './Tiempo'
import BarraDeControles from './BarraDeControles'
import {formatearTiempo} from '../../utilidades/tiempo'
import BarraDeProgreso from './BarraDeProgreso';
import Spinner from './Spinner';
import { throws } from 'assert';
import Volumen from './Volumen';

class ReproductorContenedor extends Component {
    state = {
        pausa: true,
        duracion: 0,
        cargando: false,
        volumen: 1,
        volumenGuardado: 1
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
    cargandoDatos = (evento) => {
        this.setState({
            cargando: true
        })
    }
    CargaDeDatosFinalizada = (evento) => {
        this.setState({
            cargando: false
        })
    }
    actualizarVolumen = (evento) => {
        this.setState({
            volumen: evento.target.value
        })
        this.video.volume = this.state.volumen
    }
    actualizarVolumenPorClick = (evento) => {
        if(this.state.volumen !== 0) {
            this.setState({
                volumenGuardado: this.state.volumen
            })
        }
        this.setState({
            volumen: this.state.volumen === 0 ? this.state.volumenGuardado : 0
        })
        this.video.volume = this.state.volumen
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
                    <Volumen 
                        onChange={this.actualizarVolumen}
                        onClick={this.actualizarVolumenPorClick}
                    />
                </BarraDeControles>
                <Spinner
                    cargando={this.state.cargando}
                />
                <VideoContenedor
                    sonido={false}
                    autoreproduccion={this.props.autoreproduccion}
                    pausa={this.state.pausa}
                    onLoadedMetadata={this.actualizarDuracionTotal}
                    onTimeUpdate={this.actualizarTiempoTranscurrido}
                    onSeeking={this.cargandoDatos}
                    onSeeked={this.CargaDeDatosFinalizada}
                    mp4="https://rubenmaier.github.io/api-simplificada-trailers-marvel/mp4/the-avengers.mp4"
                />
            </Reproductor>
        )
    }
}

export default ReproductorContenedor