import React from 'react'
import './dialogo.css'

function Dialogo(props) {
    return (
        <div
            className="Dialogo"
        >
            {props.children}
            <button 
                onClick={props.manejoDelClick}
                className="Boton-Cerrar"
            />
        </div>
    )
}

export default Dialogo