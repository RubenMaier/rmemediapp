import React from 'react'

function Icono(props) {
    const { color, alto, ancho } = props

    // cada vez que importemos un icono, le mandamos a su hijo y lo recibimos en props.children
    // Lo que estamos haciendo es componer componentes
    // este componente maneja responsabilidades (propiedades) que son pasadas por los distintos tipos de iconos
    return (
        <svg
            fill={color} // propiedad que le da color a los .svg
            height={alto}
            width={ancho}
            viewBox="0 0 32 32"
        >
            {props.children}
        </svg>
    )
}

export default Icono