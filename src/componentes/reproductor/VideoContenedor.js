import React, { Component } from 'react'
import Video from './Video'

class VideoContenedor extends Component {
    CambiarEstadoDeReproduccion() {
        if(this.props.pausa) {
            this.video.play() // le agrego la propiedad de play
        } else {
            this.video.pause() // le agrego la pripiedad de pausa
        }
    }
    setearReferencia = (elemento) => {
        this.video = elemento
        console.log(this.video)
    }
    componentWillReceiveProps(proximasPropiedades) { // porque me llegan nuevas propiedades
        if(proximasPropiedades.pausa !== this.props.pausa) {
            this.CambiarEstadoDeReproduccion()
        }
    }
    render() {
        return (
            <Video 
                setearReferencia={this.setearReferencia}
                sonido={this.props.sonido} 
                autoreproduccion={this.props.autoreproduccion}
                mp4={this.props.mp4}
            />
        )
    }
}

export default VideoContenedor