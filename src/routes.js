import Dashboard from './pages/staff/Dashboard/index.js'
import Historial from './pages/staff/Historial/index.js'

var routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'ni ni-laptop text-primary',
    component: Dashboard,
    layout: '/user'
  },
  {
    path: '/historial',
    name: 'Historial Incidencias',
    icon: 'ni ni-archive-2 text-primary',
    component: Historial,
    layout: '/user'
  }
]

export default routes
