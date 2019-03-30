import React from 'react'

function Spinner (props) {
    if(!props.cargando) return null
    return (
        <div>
            <span>Cargando...</span>
        </div>
    )
}

export default Spinner