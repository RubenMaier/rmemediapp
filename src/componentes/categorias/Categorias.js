import React from 'react'
import Categoria from './categoria'
import BuscadorContenedor from '../herramientas/BuscadorContenedor'
import './categorias.css'

function Categorias(props) {
    return (
        <div className="Categorias">
            <BuscadorContenedor />
            {
                props.categorias.map((item) => {
                    return (
                        <Categoria
                            {...item}
                            manejoDeAperturaPorClick={props.manejoDeAperturaPorClick}
                            key={item.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default Categorias