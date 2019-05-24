import React from 'react'
import './video.css'

function Video (props) {
    return (
        <div className="Video">
            <video 
                ref={props.setearReferencia}
                muted={props.sonido} // me inicializa el video pero muteado
                autoPlay={props.autoreproduccion} // Se autoreproduce
                //controls // le ponemos controles automaticos, pero nosotros vamos a crear los nuestros
                onLoadedMetadata={props.onLoadedMetadata} // funcion que nace del componte ReproductorContenedor llamada controlarMetadata
                onTimeUpdate={props.onTimeUpdate}
                onSeeking={props.onSeeking} // me estoy moviendo
                onSeeked={props.onSeeked} // ya termine de hacer ese movimiento
                src={props.trailer}
            />
        </div>
    )
}

export default Video