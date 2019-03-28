import React, { Component } from 'react'
import Reproductor from './Reproductor'

class ReproductorContenedor extends Component {
    render() {
        return (
            <Reproductor>
                <video 
                    //muted // me inicializa el video pero muteado
                    controls // tine controles propios
                    autoPlay // Se autoreproduce
                    src="https://rubenmaier.github.io/api-simplificada-trailers-marvel/mp4/the-avengers.mp4"
                />
            </Reproductor>
        )
    }
}

export default ReproductorContenedor