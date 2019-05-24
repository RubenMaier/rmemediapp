import React, { PureComponent } from 'react'
import './media.css' // de aca importamos un estilo que lo añadimos como una clase de estilo tradicional
import PropTypes from 'prop-types'


class Media extends PureComponent {
    recibiUnClick = (evento) => {
        this.props.menejoDelClick(this.props)
    }
    render() {
        return ( 
            <div className="Media">
                <div 
                    className="ContenedorSuperior"
                    onClick={this.recibiUnClick}
                >
                    <img
                        className="Imagen"
                        src={this.props.img}
                        alt=""
                        width={210}
                        height={300}
                    />
                </div>
                <div className="ContenedorInferior">
                    <p className="Titulo-Info">{this.props.titulo}</p> {/* le ponemos this.state y no this.props para que podamos actualizarlo como vimos antes con la utlización de estados */}
                    <p className="Descripcion">{this.props.descripcion}</p>
                </div>
                    
            </div>
        )
    }
}

Media.propTypes = { // atributo que añadimos con una librería extra que añadimos para anticipar posibles problemas
    img: PropTypes.string,
    titulo: PropTypes.string,
    descripcion: PropTypes.string,
}

export default Media