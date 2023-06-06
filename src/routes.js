// import Dashboard from './pages/staff/Dashboard/index.js'
// import Historial from './pages/staff/Historial/index.js'
// import Tickets from './pages/staff/Tickets/index.js'
// import Chromebooks from './pages/staff/Chromebooks/index.js'
// import Score from './pages/staff/Score/index.js'
// import Usuarios from './pages/staff/Usuarios/index.js'
// import Statistics from './pages/staff/Statistics/index.js'

import ArgonBox from './components/ArgonBox/index'

var routes = [
  {
    type: 'route',
    name: 'Incidencias',
    key: 'dashboard',
    route: '/dashboard',
    icon: <ArgonBox component='i' color='primary' fontSize='14px' className='ni ni-tv-2' />,
    component: <Incidences />
  }
  // {
  //   path: '/dashboard',
  //   name: 'Incidencias',
  //   icon: 'bi bi-building-exclamation text-danger',
  //   component: Dashboard,
  //   layout: '/staff',
  //   roles: ['usuario', 'superadmin', 'administrador']
  // },
  // {
  //   path: '/historial',
  //   name: 'Historial Incidencias',
  //   icon: 'bi bi-clock-history text-info',
  //   component: Historial,
  //   layout: '/staff',
  //   roles: ['usuario', 'superadmin', 'administrador']
  // },
  // {
  //   path: '/tickets',
  //   name: 'Datos osTickets',
  //   icon: 'bi bi-ticket text-primary',
  //   component: Tickets,
  //   layout: '/staff',
  //   roles: ['usuario', 'superadmin', 'administrador']
  // },
  // {
  //   path: '/chromebooks',
  //   name: 'Chromebooks',
  //   icon: 'bi bi-laptop text-success',
  //   component: Chromebooks,
  //   layout: '/staff',
  //   roles: ['usuario', 'superadmin', 'administrador']
  // },
  // {
  //   path: '/score',
  //   name: 'Score EIA',
  //   icon: 'bi bi-clipboard-data text-warning',
  //   component: Score,
  //   layout: '/staff',
  //   roles: ['superadmin']
  // },
  // {
  //   path: '/usuarios',
  //   name: 'Usuarios',
  //   icon: 'bi bi-person-fill-check text-info',
  //   component: Usuarios,
  //   layout: '/staff',
  //   roles: ['superadmin']
  // },
  // {
  //   path: '/estadisticas',
  //   name: 'Estadísticas',
  //   icon: 'bi bi-graph-up  text-primary',
  //   component: Statistics,
  //   layout: '/staff',
  //   roles: ['superadmin', 'usuario', 'administrador']
  // }

  //    text-primary
  //    text-warning
  //    text-info
  //    text-success
  //    text-danger
  //    text-dark
  //    text-light
  //    text-darker

  /*
  {
    type: "route",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  */
]

export default routes
