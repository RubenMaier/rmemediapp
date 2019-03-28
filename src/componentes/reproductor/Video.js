import React, { Component } from 'react'

class Video extends Component {
    render() {
        return (
            <div>
                <video 
                    muted={this.props.sonido} // me inicializa el video pero muteado
                    autoPlay={this.props.autoreproduccion} // Se autoreproduce
                    //controls // le ponemos controles automaticos, pero nosotros vamos a crear los nuestros
                    src={this.props.mp4}
                />
            </div>
        )
    }
}

export default Video