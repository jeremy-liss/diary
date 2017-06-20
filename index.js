import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const target = document.getElementById('root')

const render = ()=> {
  const view = App()
  ReactDOM.render(view, target)
}

render()
