import Dashboard from './pages/staff/Dashboard/index.js'
import Historial from './pages/staff/Historial/index.js'
// import Score from './pages/staff/Score/index.js'
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
    icon: 'bi bi-clock-history text-info',
    component: Historial,
    layout: '/user'
  },
  {
    path: '/tickets',
    name: 'Contador Tickets',
    icon: 'bi bi-ticket text-warning',
    component: Tickets,
    layout: '/user'
  }
  //    text-primary
  //    text-warning
  //    text-info
  //    text-success
  //    text-danger
  //    text-dark
  //    text-light
  //    text-darker
]

export default routes
