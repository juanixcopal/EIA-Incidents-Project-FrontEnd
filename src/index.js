import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from 'pages/login/login'
import BasicTabs from 'pages/reports/incidents'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/paper-dashboard.scss?v=0.1.0'
import './assets/demo/demo.css'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminLayout from './layouts/Admin'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <ToastContainer />
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/incidencias' component={BasicTabs} />
            <Route path='/user' render={props => <AdminLayout {...props} />} />
            <Redirect to='/incidencias' />
        </Switch>
    </BrowserRouter>

    // <React.StrictMode>
    //     <Login />
    // </React.StrictMode>
)

// <React.StrictMode>
//     <BasicTabs />
// </React.StrictMode>

//  <BrowserRouter>
//   <Switch>
//     <Route path="/user" render={(props) => <AdminLayout {...props} />} />
//     <Redirect to="/user/planta1" />
//   </Switch>
// </BrowserRouter>
