import React from 'react'
import './titulo.css'

function Titulo(props) {
    return (
        <div className="Titulo">
            <h2>{props.titulo}</h2>
        </div>
    )
}

export default Titulo