import React from 'react'

function Dialogo(props) {
    return (
        <div>
            {props.children}
            <button onClick={props.manejoDelClick}>cerrar</button>
        </div>
    )
}

export default Dialogo