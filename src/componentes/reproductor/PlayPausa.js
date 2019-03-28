import React from 'react'
import Play from '../iconos/Play'
import Pausa from '../iconos/Pausa'

// ambos eventos (Play y Puasa) manejan las mismas acciones como un toggle, por eso lo manejamos todo con una sola logica
function PlayPausa(props) {
    return (
        <div>
            {
                props.pausa ? // si está en pausa me muestra el Play
                    <button onClick={props.manejadorDeClick}>
                        <Play 
                            alto={25}
                            ancho={25}
                            color="red"
                        />
                    </button>
                : // si no está en pausa me muestra el Pausa
                    <button onClick={props.manejadorDeClick}>
                        <Pausa 
                            alto={25}
                            ancho={25}
                            color="red"
                        />
                    </button>
            }
        </div>
    )
}

export default PlayPausa