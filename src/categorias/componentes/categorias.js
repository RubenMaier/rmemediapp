import React from 'react'
import Categoria from './categoria'

function Categorias(props) {
    return (
        <div>
            {
                props.categorias.map((item) => {
                    return <Categoria {...item} key={item.id} />
                })
            }
        </div>
    )
}

export default Categorias