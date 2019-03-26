import React from 'react'
import { render } from 'react-dom'
import Media from './src/playlist/componentes/media'

const app = document.getElementById('app')

render(<Media titulo="Avengers: Infinity War" descripcion="The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.
" imagen="./img/avengers-infinity-war.jpg" />, app)