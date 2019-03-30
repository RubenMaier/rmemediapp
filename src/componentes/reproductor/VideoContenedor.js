import React, { Component } from 'react'
import Video from './Video'

class VideoContenedor extends Component {
    setearReferencia = (elemento) => {
        this.video = elemento
    }
    cambiarEstadoDeReproduccion = () => {
        if(this.props.pausa) {
            this.video.play() // le agrego la propiedad de play
        } else {
            this.video.pause() // le agrego la pripiedad de pausa
        }
    }
    componentWillReceiveProps(proximasPropiedades) { // porque me llegan nuevas propiedades
        if(proximasPropiedades.pausa !== this.props.pausa) { // si cambio la propiedad respecto a lo que ya tenia, entonces...
            this.cambiarEstadoDeReproduccion()
        }
    }
    render() {
        return (
            <Video 
                setearReferencia={this.setearReferencia}
                sonido={this.props.sonido} 
                autoreproduccion={this.props.autoreproduccion}
                onLoadedMetadata={this.props.onLoadedMetadata}
                onTimeUpdate={this.props.onTimeUpdate}
                onSeeking={this.props.onSeeking}
                onSeeked={this.props.onSeeked}
                trailer={this.props.trailer}
            />
        )
    }
}

export default VideoContenedor