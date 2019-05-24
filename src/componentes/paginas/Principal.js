import React from 'react'
import './principal.css'

function Principal(props) {
    return (
        <section className="Principal">
            {props.children}
        </section>
    )
}

export default Principal