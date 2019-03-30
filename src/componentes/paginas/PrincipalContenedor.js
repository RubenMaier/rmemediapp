import React, { Component } from 'react'
import Principal from '../paginas/Principal' // no lo podemos llamar home porque nos generaria problema, pero la idea es separar un componente en dos en este caso, porque tenemos una parte de estilos UI que es propio de un componente tonto y otra parte propia de un componente inteligente
import Categorias from '../categorias/Categorias'
import DialogoContenedor from '../herramientas/DialogoContenedor'
import Dialogo from '../herramientas/Dialogo'
import ErrorContenedor from '../errores/ErrorContenedor'
import ReproductorContenedor from '../reproductor/ReproductorContenedor';

class PrincipalContenedor extends Component {
    state = {
        dialogoVisible: false
    }
    cerrarVentana = (evento) => {
        this.setState({
            dialogoVisible: false
        })
    }
    abrirVentana = (media) => {
        this.setState({
            dialogoVisible: true,
            media
        })
    }
    render() {
        return (
            <ErrorContenedor>
                <Principal>
                    <Categorias
                        categorias={this.props.datos.categorias}
                        manejoDeAperturaPorClick={this.abrirVentana}
                    />
                    {
                        this.state.dialogoVisible && // Si se cumple hace esto, si no se cumple en ves de poner '&&' deberia haber puesto '?' y luego al finalizar el html que ejecuta en la parte del true, pongo ':' para colocar la accion del caso false
                        <DialogoContenedor>
                            <Dialogo manejoDelClick={this.cerrarVentana}>
                                <ReproductorContenedor 
                                    autoreproduccion={true}
                                    titulo={this.state.media.titulo}
                                    trailer={this.state.media.trailer}
                                />
                            </Dialogo>
                        </DialogoContenedor>
                    }
                </Principal>
            </ErrorContenedor>
        )
    }
}

export default PrincipalContenedor