import React from 'react'
import { render } from 'react-dom'
import Principal from './src/playlist/componentes/principal'
import datos from './src/api.json'

const app = document.getElementById('app')

render(<Principal categorias={datos.categorias} />, app)