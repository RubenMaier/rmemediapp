import React, { Component } from 'react'
import Layout from '../componentes/principal' // no lo podemos llamar home porque nos generaria problema, pero la idea es separar un componente en dos en este caso, porque tenemos una parte de estilos UI que es propio de un componente tonto y otra parte propia de un componente inteligente
import Categorias from '../../categorias/componentes/categorias'

class Principal extends Component {
    render() {
        return (
            <Layout>
                <Categorias categorias={this.props.datos.categorias} />
            </Layout>
        )
    }
}

export default Principal