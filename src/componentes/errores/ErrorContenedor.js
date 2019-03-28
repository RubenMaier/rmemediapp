import React, { Component } from 'react'
import Error from './Error'

class ErrorContenedor extends Component {
    state = {
        manejoDeError: false
    }
    //  nos permite capturar errores y mostrarle al usuario en la pagina (ciclo de vida del propio componente)
    componentDidCatch(error, info) {
        this.setState({
            manejoDeError: true
        })
    }
    render() {
        if (this.state.manejoDeError) {
            return (
                <Error />
            )
        }
        return this.props.children
    }
}

export default ErrorContenedor