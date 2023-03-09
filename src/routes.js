import Dashboard from './pages/staff/Dashboard/index.js'
import Historial from './pages/staff/Historial/index.js'
import Score from './pages/staff/Score/index.js'
import Tickets from './pages/staff/Tickets/index.js'

var routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'bi bi-laptop text-primary',
    component: Dashboard,
    layout: '/user'
  },
  {
    path: '/historial',
    name: 'Historial Incidencias',
    icon: 'bi bi-clock-history text-primary',
    component: Historial,
    layout: '/user'
  },
  // {
  //   path: '/score',
  //   name: 'Score',
  //   icon: 'bi bi-clipboard2-data text-primary',
  //   component: Score,
  //   layout: '/user'
  // },
  {
    path: '/tickets',
    name: 'Contador Tickets',
    icon: 'bi bi-ticket text-primary',
    component: Tickets,
    layout: '/user'
  }
]

export default routes
