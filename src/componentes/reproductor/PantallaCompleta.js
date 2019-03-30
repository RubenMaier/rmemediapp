import React from 'react'
import IconoPantallaCompleta from '../iconos/PantallaCompleta'

function PantallaCompleta (props) {
    return (
        <div onClick={props.onClick}>
            <IconoPantallaCompleta 
                alto={25}
                ancho={25}
                color="red"
            />
        </div>
    )
}

export default PantallaCompleta