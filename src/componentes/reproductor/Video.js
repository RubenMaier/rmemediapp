import React from 'react'

function Video (props) {
    return (
        <div>
            <video 
                pause
                ref={props.setearReferencia}
                muted={props.sonido} // me inicializa el video pero muteado
                autoPlay={props.autoreproduccion} // Se autoreproduce
                //controls // le ponemos controles automaticos, pero nosotros vamos a crear los nuestros
                src={props.mp4}
            />
        </div>
    )
}

export default Video