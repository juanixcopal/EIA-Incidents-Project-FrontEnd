import Dashboard from './pages/staff/Dashboard/index.js'
import Historial from './pages/staff/Historial/index.js'
import Tickets from './pages/staff/Tickets/index.js'
import Chromebooks from './pages/staff/Chromebooks/index.js'
import Score from './pages/staff/Score/index.js'
import Usuarios from './pages/staff/Usuarios/index.js'

var routes = [
  {
    path: '/dashboard',
    name: 'Incidencias',
    icon: 'bi bi-building-exclamation text-danger',
    component: Dashboard,
    layout: '/staff',
    roles: ['usuario', 'superadmin', 'administrador']
  },
  {
    path: '/historial',
    name: 'Historial Incidencias',
    icon: 'bi bi-clock-history text-info',
    component: Historial,
    layout: '/staff',
    roles: ['usuario', 'superadmin', 'administrador']
  },
  {
    path: '/tickets',
    name: 'Datos osTickets',
    icon: 'bi bi-ticket text-primary',
    component: Tickets,
    layout: '/staff',
    roles: ['usuario', 'superadmin', 'administrador']
  },
  {
    path: '/chromebooks',
    name: 'Chromebooks',
    icon: 'bi bi-laptop text-success',
    component: Chromebooks,
    layout: '/staff',
    roles: ['superadmin', 'administrador', 'usuario']
  },
  {
    path: '/score',
    name: 'Score EIA',
    icon: 'bi bi-clipboard-data text-warning',
    component: Score,
    layout: '/staff',
    roles: ['superadmin']
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    icon: 'bi bi-person-fill-check text-info',
    component: Usuarios,
    layout: '/staff',
    roles: ['superadmin']
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
