import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import STORE from './STORE.js'
import App from './App.js'

ReactDOM.render(
  <App store={STORE} />,
  <App />,
  document.getElementById('root'),
);