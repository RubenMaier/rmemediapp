import React from 'react'
import { render } from 'react-dom'
import Principal from '../paginas/contenedores/principal'
import datos from '../api.json'

const app = document.getElementById('app')

render(<Principal datos={datos} />, app)