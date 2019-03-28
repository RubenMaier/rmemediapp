import React from 'react'
import { render } from 'react-dom'
import PrincipalContenedor from '../componentes/paginas/PrincipalContenedor'
import datos from '../api.json'

const index = document.getElementById('index')

// que voy a renderizar, donde
render(<PrincipalContenedor datos={datos} />, index)