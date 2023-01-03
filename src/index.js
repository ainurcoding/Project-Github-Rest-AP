import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './View'
import { store } from './app/store'
import { Provider } from 'react-redux'
// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)