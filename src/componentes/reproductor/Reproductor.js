import React from 'react'
import './reproductor.css'

const Reproductor = (props) => (
    <div
        ref={props.setearReferencia}
        className="Reproductor"
    >
        {props.children}
    </div>
)

export default Reproductor