import { lazy } from 'react'

import Loadable from '../ui-component/Loadable'

const Login = Loadable(lazy(() => import('../pages/login/index')))

const AuthenticationRoutes = {
  path: '/',
  children: [
    {
      path: '/login',
      element: <Login />
    }
  ]
}

export default AuthenticationRoutes
