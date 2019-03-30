import React from 'react'

function Video (props) {
    return (
        <div>
            <video 
                ref={props.setearReferencia}
                muted={props.sonido} // me inicializa el video pero muteado
                autoPlay={props.autoreproduccion} // Se autoreproduce
                //controls // le ponemos controles automaticos, pero nosotros vamos a crear los nuestros
                onLoadedMetadata={props.onLoadedMetadata} // funcion que nace del componte ReproductorContenedor llamada controlarMetadata
                onTimeUpdate={props.onTimeUpdate}
                onSeeking={props.onSeeking} // me estoy moviendo
                onSeeked={props.onSeeked} // ya termine de hacer ese movimiento
                src={props.mp4}
            />
        </div>
    )
}

export default Video