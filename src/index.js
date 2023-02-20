import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Incidents from './pages/incidents/index.js'
// import PageNotFound from './pages/pageNotFound/Index.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './assets/plugins/nucleo/css/nucleo.css'
import './assets/scss/argon-dashboard-react.scss'

import UserLayout from './components/layouts/UserLayouts.js'

const Login = React.lazy(() => import('./pages/login/index'))

const App = () => {
  const token = localStorage.getItem('token')

  return (
    <BrowserRouter>
      <ToastContainer />

      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Incidents} />
        {/* <Route path='*' component={PageNotFound} /> */}
        {token ? (
          <>
            <Route exact path={`/`} />
            <Route path='/user' render={props => <UserLayout {...props} />} />
          </>
        ) : (
          <Route to={'/'} component={Login} />
        )}
      </Switch>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
