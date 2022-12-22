import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/paper-dashboard.scss?v=0.1.0'
import './assets/demo/demo.css'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminLayout from './layouts/Admin'
import BasicTabs from './components/basicTabs/basicTabs.js'

const Login = React.lazy(() => import('pages/login/login'))

const App = () => {
  const token = localStorage.getItem('token')

  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/incidencias' component={BasicTabs} />
        {token ? (
          <>
            <Route exact path={`/`} />
            <Route path='/' render={props => <AdminLayout {...props} />} />
          </>
        ) : (
          <Redirect to={'/incidencias'} />
        )}
        <Redirect to={'/incidencias'} />
      </Switch>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
