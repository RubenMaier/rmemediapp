import React from 'react'
import IconoPantallaCompleta from '../iconos/PantallaCompleta'
import './pantalla-completa.css'

function PantallaCompleta (props) {
    return (
        <div 
            onClick={props.onClick} 
            className="PantallaCompleta" 
        >
            <IconoPantallaCompleta 
                alto={20}
                ancho={20}
                color="whitesmoke"
            />
        </div>
    )
}

export default PantallaCompleta