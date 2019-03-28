import React from 'react'
import Categoria from './categoria'
import BuscadorContenedor from '../herramientas/BuscadorContenedor'

function Categorias(props) {
    return (
        <div>
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