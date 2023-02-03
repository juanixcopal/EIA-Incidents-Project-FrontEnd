import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Incidents from './pages/incidents/index.js'
import Pruebas from './pages/Pruebas.js'
import PageNotFound from './pages/pageNotFound/Index.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/plugins/nucleo/css/nucleo.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/scss/argon-dashboard-react.scss'
import UserLayout from './components/layouts/User.js'

const Login = React.lazy(() => import('./pages/login/index'))

const App = () => {
  const token = localStorage.getItem('token')

  return (
    <BrowserRouter>
      <ToastContainer />

      <Switch>
        {/* <Route exact path='/' component={Incidents} />
        <Route exact path='/login' component={Login} />
        <Route path='/user' render={props => <UserLayout {...props} />} />
        <Redirect to={'/'} /> */}

        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Incidents} />
        <Route exact path='/pruebas' component={Pruebas} />
        {/* <Route path='*' component={PageNotFound} /> */}
        {token ? (
          <>
            <Route exact path={`/`} />
            <Route path='/user' render={props => <UserLayout {...props} />} />
          </>
        ) : (
          <Redirect to={'/'} />
        )}
        {/* <Route path='*' component={PageNotFound} /> */}
      </Switch>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
