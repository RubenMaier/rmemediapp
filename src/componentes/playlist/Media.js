import React, { PureComponent } from 'react'
import './media.css' // de aca importamos un estilo que lo añadimos como una clase de estilo tradicional
import PropTypes from 'prop-types'

class Media extends PureComponent {
    render() {
        // también los estilos son creados como un objeto e insertados como "style" en las etiquetas html
        const estilo = {
            contenedor: {
                fontSize: 14, // note que se usa camelCase porque no se puede escribir "front-size" en javascript, tampoco le escribo '14px' porque es un objeto json
                border: '1px solid red'
            }
        }
        return ( // aca va a estar el html
            // sintaxis jsx -> escribo css dentro de un .js
            <div className="Media"> {/*no podemos utilizar el típico atributo "class" porque ahora son propiedades y class en javascript define una clase. Otra cosa, en formatos jsx tenemos que comentar asi como lo estoy haciendo, es un asco*/}
                <div 
                    style={estilo.contenedor} 
                    onClick={this.props.menejoDelClick}
                > 
                {/* En este caso agregamos el estilo sin la necesidad de importarlo. Por otro lado "enlazamos eventos del Dom" puesto que al hacerle click se ejecutara la funcion accionarDelClick*/}
                    <img
                        src={this.props.img}
                        alt=""
                        width={210}
                        height={300}
                    />
                    <h3>{this.props.titulo}</h3> {/* le ponemos this.state y no this.props para que podamos actualizarlo como vimos antes con la utlización de estados */}
                    <p>{this.props.descripcion}</p>
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