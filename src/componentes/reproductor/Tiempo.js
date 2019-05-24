import React from 'react'
import './tiempo.css'

function Tiempo(props) {
    return (
        <div className="Tiempo">
            <p>
                <span>{props.tiempoTranscurrido} | {props.duracion}</span>
            </p>
        </div>
    )
}

export default Tiempo