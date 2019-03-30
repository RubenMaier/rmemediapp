import React from 'react'

function Tiempo(props){
    return (
        <div>
            <p>
                <span>00 / {props.duracion}</span>
            </p>
        </div>
    )
}

export default Tiempo