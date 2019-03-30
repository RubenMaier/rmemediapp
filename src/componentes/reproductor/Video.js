import React from 'react'

function Video (props) {
    return (
        <div>
            <video 
                ref={props.setearReferencia}
                muted={props.sonido} // me inicializa el video pero muteado
                autoPlay={props.autoreproduccion} // Se autoreproduce
                //controls // le ponemos controles automaticos, pero nosotros vamos a crear los nuestros
                onLoadedMetadata={props.metadata}
                src={props.mp4}
            />
        </div>
    )
}

export default Video