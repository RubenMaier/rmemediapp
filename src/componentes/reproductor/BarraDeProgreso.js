import React from 'react'
import './barra-de-progreso.css'

function BarraDeProgreso(props) {
    return (
        <div className="BarraDeProgreso">
            <input 
                type="range" // es un rango, le paso atributos limite y maximo
                min={0}
                max={props.duracion}
                value={props.tiempoTranscurrido}
                onChange={props.onChange}
            />
        </div>
    )
}

export default BarraDeProgreso