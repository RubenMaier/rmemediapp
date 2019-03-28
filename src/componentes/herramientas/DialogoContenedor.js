import React, { Component } from 'react'
import { createPortal } from 'react-dom'

class DialogoContenedor extends Component {
    render() {
        // retornamos un portal
        const dialogo = document.getElementById('dialogo')
        // que voy a renderizar (en este caso la ventana de dialogo), donde (en el tag html correspondiente al dialogo)
        return createPortal(this.props.children, dialogo)
    }
}

export default DialogoContenedor