import Prueba from './pages/staff/prueba.js'
import Planta_0 from './pages/staff/planta0.js'
import Planta_1 from './pages/staff/planta1.js'
import Planta_S1 from './pages/staff/plantaS1.js'
import Planta_S2 from './pages/staff/plantaS2.js'

var routes = [
  {
    path: '/prueba',
    name: 'Prueba',
    icon: 'ni ni-laptop text-primary',
    component: Prueba,
    layout: '/user'
  },
  {
    path: '/planta1',
    name: 'Planta 1',
    icon: 'ni ni-laptop text-primary',
    component: Planta_1,
    layout: '/user'
  },
  {
    path: '/planta0',
    name: 'Planta 0',
    icon: 'ni ni-laptop text-primary',
    component: Planta_0,
    layout: '/user'
  },
  {
    path: '/planta-1',
    name: 'Planta -1',
    icon: 'ni ni-laptop text-primary',
    component: Planta_S1,
    layout: '/user'
  },
  {
    path: '/planta-2',
    name: 'Planta -2',
    icon: 'ni ni-laptop text-primary',
    component: Planta_S2,
    layout: '/user'
  },
]

export default routes