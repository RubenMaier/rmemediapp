import React from 'react'

function Tiempo(props) {
    return (
        <div>
            <p>
                <span>{props.tiempoTranscurrido} | {props.duracion}</span>
            </p>
        </div>
    )
}

export default Tiempo