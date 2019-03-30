import React from 'react'

function Spinner (props) {
    if(!props.cargando) return null
    console.log(props.cargando)
    return (
        <div>
            <span>Cargando...</span>
        </div>
    )
}

export default Spinner