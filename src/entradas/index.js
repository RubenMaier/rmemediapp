import React from 'react'
import { render } from 'react-dom'
import Index from '../paginas/contenedores/index'
import datos from '../api.json'

const app = document.getElementById('app')

render(<Index datos={datos} />, app)