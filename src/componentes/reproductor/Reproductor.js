import React from 'react'

const Repoductor = (props) => (
    <div
        ref={props.setearReferencia}
    >
        {props.children}
    </div>
)

export default Repoductor