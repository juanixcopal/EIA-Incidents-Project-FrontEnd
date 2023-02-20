import Dashboard from './pages/staff/Dashboard/index.js'
import Historial from './pages/staff/Historial/index.js'
// import Inventario from './pages/staff/Inventario/index.js'
import ScannerQR from './pages/staff/Scanner-QR/index.js'
import GenerateQR from './pages/staff/Generate-QR/index.js'

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
  },
  // {
  //   path: '/inventario',
  //   name: 'Inventario',
  //   icon: 'ni ni-archive-2 text-primary',
  //   component: Inventario,
  //   layout: '/user'
  // },
  {
    path: '/qrscann',
    name: 'QR SCANN',
    icon: 'ni ni-archive-2 text-primary',
    component: ScannerQR,
    layout: '/user'
  },
  {
    path: '/qrgenerate',
    name: 'QR GENERATE',
    icon: 'ni ni-archive-2 text-primary',
    component: GenerateQR,
    layout: '/user'
  }
]

export default routes
