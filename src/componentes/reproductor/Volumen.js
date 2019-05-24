import React from 'react'
import IconoVolumen from '../iconos/Volumen'
import './volumen.css'

function Volumen(props) {
    return (
        <button className="Volumen">
            <div onClick={props.onClick}>
                <IconoVolumen 
                    alto={20}
                    ancho={20}
                    color="whitesmoke"
                />
            </div>
            <div className="Rango">
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