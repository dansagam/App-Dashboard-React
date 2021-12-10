import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
   BrowserRouter as Router,
   Route,
   Routes,
   // Redirect,
   Navigate,
} from 'react-router-dom'
// import App from './App'
import reportWebVitals from './reportWebVitals'
import './assets/css/material-dashboard-react.css'
import Admin from './layout/Admin'
import routes from './routes'
// import Dashboard from './views/Dashboard/Dashboard'

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route
               path="/"
               element={<Navigate replace to="admin/dashboard" />}
            />
            <Route path="admin" element={<Admin />} />
            {routes.map((prop, index) => {
               if (prop.layout === '/admin') {
                  return (
                     <Route
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        path={prop.layout + prop.path}
                        element={<prop.component />}
                     />
                  )
               }
               return null
            })}
            <Route
               path="/admin"
               element={<Navigate replace to="/admin/dashboard" />}
            />
            <Route
               path="*"
               element={
                  <main style={{ padding: '1rem' }}>
                     <p>There&lsquo;s nothing here!</p>
                  </main>
               }
            />
         </Routes>
      </Router>
   </React.StrictMode>,
   document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
