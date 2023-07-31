// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// for redux
import {store} from "./components/inputStore.jsx"
import { Provider } from 'react-redux'
// for router
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Router>
  <Provider store={store}>
    <App />
  </Provider>
  </Router>
  // </React.StrictMode>,
)
