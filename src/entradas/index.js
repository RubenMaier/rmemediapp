import React from 'react'
import { render } from 'react-dom'
import Index from '../paginas/contenedores/index'
import datos from '../api.json'

const index = document.getElementById('index')

// que voy a renderizar, donde
render(<Index datos={datos} />, index)