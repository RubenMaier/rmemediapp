import React, { Component } from 'react'

/* Esta es una forma vieja e incomoda de escribirlo, hoy por hoy lo hacemos como se muetra mas abajo
function Buscador(props) {
    return (
        <form action=""></form>
    )
}
*/

const Buscador = (props) => (
    <form onSubmit={props.manejadorDeEnvio} >
        <input
            ref={props.setearReferencia} // las referencias a eventos de html nos sirven para almacenar dentro de react el elemento html
            type="text"
            placeholder="Buscar..."
            name="buscar"
            value={props.valor} // queremos hacer una transformación y por eso usamos value
            onChange={props.manejadorDeCambios} // manejo el estado de cambio de este elemento
            //defaultValue="" // es como el "value" pero nos permite editarlo luego de haberle completado
        />
    </form>
)

export default Buscador