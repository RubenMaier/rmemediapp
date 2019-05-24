import React from 'react'
import './barra-de-controles.css'

function BarraDeControles (props) {
    return (
        <div className="BarraDeControles">
            {props.children}
        </div>
    )
}

export default BarraDeControles