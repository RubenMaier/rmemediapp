import React from 'react'
import Icono from './Icono'

function PantallaCompleta(props) {
    // la etiqueta path es la que diferencia como se ven nuestros .svg
    // le heredamos las propiedades al componente Icono con un split operator
    return (
        <Icono {...props}>
            <path d="M32 0h-13l5 5-6 6 3 3 6-6 5 5z"></path>
            <path d="M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"></path>
            <path d="M0 32h13l-5-5 6-6-3-3-6 6-5-5z"></path>
            <path d="M0 0v13l5-5 6 6 3-3-6-6 5-5z"></path>
        </Icono>
    )
}

export default PantallaCompleta