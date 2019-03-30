import React from 'react'
import IconoVolumen from '../iconos/Volumen'

function Volumen(props) {
    return (
        <button>
            <div onClick={props.onClick}>
                <IconoVolumen 
                    color="red"
                    size={25}
                />
            </div>
            <div>
                <input 
                    type="range" 
                    min={0}
                    max={1} // el volumen se mueve siempre entre 0 y 1
                    step={.05}// pequeño espacio en el que voy a avanzar la barrita (le damos 100 pasitos)
                    onChange={props.onChange}
                />
            </div>
        </button>
    )
}

export default Volumen