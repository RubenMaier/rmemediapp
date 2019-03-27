import React from 'react'
import Icono from './icono'

function Pausa(props) {
    // la etiqueta path es la que diferencia como se ven nuestros .svg
    // le heredamos las propiedades al componente Icono con un split operator
    return (
        <Icono {...props}>
            <path d="M4 4h10v24h-10zM18 4h10v24h-10z"></path>
        </Icono>
    )
}

export default Pausa