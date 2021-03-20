import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  //<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  //</React.StrictMode>, We can't use strict mode with material-ui because they are not keeping up with React devs
  document.getElementById('root')
)
