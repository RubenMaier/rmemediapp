import React, { Component } from 'react'
import Principal from '../componentes/principal' // no lo podemos llamar home porque nos generaria problema, pero la idea es separar un componente en dos en este caso, porque tenemos una parte de estilos UI que es propio de un componente tonto y otra parte propia de un componente inteligente
import Categorias from '../../categorias/componentes/categorias'
import Dialogo from '../../herramientas/contenedores/dialogo'
import DialogoCuerpo from '../../herramientas/componentes/dialogo'

class Index extends Component {
    state = {
        dialogoVisible: false
    }
    manejoDeCierrePorClick = (event) => {
        this.setState({
            dialogoVisible: false
        })
    }
    manejoDeAperturaPorClick = (event) => {
        this.setState({
            dialogoVisible: true
        })
    }
    render() {
        return (
            <Principal>
                <Categorias
                    categorias={this.props.datos.categorias}
                    manejoDeAperturaPorClick={this.manejoDeAperturaPorClick}
                />
                {
                    this.state.dialogoVisible && // Si se cumple hace esto, si no se cumple en ves de poner '&&' deberia haber puesto '?' y luego al finalizar el html que ejecuta en la parte del true, pongo ':' para colocar la accion del caso false
                    <Dialogo>
                        <DialogoCuerpo manejoDelClick={this.manejoDeCierrePorClick}>

                        </DialogoCuerpo>
                    </Dialogo>
                }
            </Principal>
        )
    }
}

export default Index