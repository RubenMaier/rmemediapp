import React, {Component} from 'react'
import Buscador from './Buscador'

class BuscadorContenedor extends Component {
    state = {
        valor: 'avengers'
    }
    setearReferencia = (elemento) => {
        this.input = elemento // tomamos el elemento html que queriamos metiante la referencia que hicimos
    }
    manejadorDeEnvio = (evento) => {
        evento.preventDefault()
        console.log(this.input.value) // imprimimos el valor que le pusimos al input dentro del form html en el buscador
    }
    manejadorDeCambios = (evento) => {
        this.setState({
            valor: evento.target.value //.remplace(' ', '-') nos cambia los espacios por guiones
        })
    }
    render() {
        return (
            <Buscador 
                setearReferencia={this.setearReferencia} // las referencias son una forma de react para poder acceder a elementos propios del DOM
                manejadorDeEnvio={this.manejadorDeEnvio}
                manejadorDeCambios={this.manejadorDeCambios}
                valor={this.state.valor}
            />
        )
    }
}

export default BuscadorContenedor