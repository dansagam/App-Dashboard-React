import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
   BrowserRouter as Router,
   // Route,
   // Routes,
   // // Redirect,
   // Navigate,
} from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './assets/css/material-dashboard-react.css'
// import Admin from './layout/Admin'
// import routes from './routes'
// import Dashboard from './views/Dashboard/Dashboard'

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <App />
      </Router>
   </React.StrictMode>,
   document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
