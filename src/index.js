import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './app'


const tag = <strong>Olá React, as coisas aqui funcionam</strong>

ReactDOM.render(<App />,
    document.getElementById('root')
)