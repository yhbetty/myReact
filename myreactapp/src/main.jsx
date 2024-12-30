import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import './assets/all.scss'
import App from './App-1210-navbar'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
