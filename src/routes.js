import Planta_0 from './pages/staff/planta0.js'
import Planta_1 from './pages/staff/planta1.js'
import Planta_S1 from './pages/staff/plantaS1.js'
import Planta_S2 from './pages/staff/plantaS2.js'
import Dashboard from './pages/staff/Dashboard.js'

var routes = [
  // {
  //   path: '/planta1',
  //   name: 'Planta 1',
  //   icon: 'ni ni-laptop text-primary',
  //   component: Planta_1,
  //   layout: '/user',
  //   id: 4
  // },
  // {
  //   path: '/planta0',
  //   name: 'Planta 0',
  //   icon: 'ni ni-laptop text-primary',
  //   component: Planta_0,
  //   layout: '/user',
  //   id: 3
  // },
  // {
  //   path: '/planta-1',
  //   name: 'Planta -1',
  //   icon: 'ni ni-laptop text-primary',
  //   component: Planta_S1,
  //   layout: '/user',
  //   id: 2
  // },
  // {
  //   path: '/planta-2',
  //   name: 'Planta -2',
  //   icon: 'ni ni-laptop text-primary',
  //   component: Planta_S2,
  //   layout: '/user',
  //   id: 1
  // }
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'ni ni-laptop text-primary',
    component: Dashboard,
    layout: '/user'
  }
]

export default routes
