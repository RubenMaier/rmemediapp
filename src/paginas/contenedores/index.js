import React, { Component } from 'react'
import Principal from '../componentes/principal' // no lo podemos llamar home porque nos generaria problema, pero la idea es separar un componente en dos en este caso, porque tenemos una parte de estilos UI que es propio de un componente tonto y otra parte propia de un componente inteligente
import Categorias from '../../categorias/componentes/categorias'

class Index extends Component {
    render() {
        return (
            <Principal>
                <Categorias categorias={this.props.datos.categorias} />
            </Principal>
        )
    }
}

export default Index