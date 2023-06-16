import { useRoutes } from 'react-router-dom'

import MainRoutes from './MainRoutes'
import AuthenticationRoutes from './AuthenticationRoutes'

const ThemeRoutes = () => {
  const routing = useRoutes([MainRoutes, AuthenticationRoutes])

  return routing
}

export default ThemeRoutes
