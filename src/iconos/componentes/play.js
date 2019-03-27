import React from 'react'
import Icono from './icono'

function Play(props) {
    // la etiqueta path es la que diferencia como se ven nuestros .svg
    // le heredamos las propiedades al componente Icono con un split operator
    return (
        <Icono {...props}>
            <path d="M6 4l20 12-20 12z"></path>
        </Icono>
    )
}

export default Play