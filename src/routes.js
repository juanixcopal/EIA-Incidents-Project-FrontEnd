import FloorOneIncidents from './pages/staff/floorOneIncidents'
import FloorTwoIncidents from 'pages/staff/floorTwoIncidents'
import FloorThreeIncidents from 'pages/staff/floorThreeIncidents'
import FloorFourIncidents from 'pages/staff/floorFourIncidents'
import PageClassrooms from 'pages/staff/classrooms'
import { FaRegBuilding } from 'react-icons/fa'
import { SiGoogleclassroom } from 'react-icons/si'

var routes = [
    {
        path: '/planta1',
        name: 'Planta 1',
        component: FloorOneIncidents,
        icon: <FaRegBuilding />,
        layout: '/user'
    },
    {
        path: '/planta0',
        name: 'Planta 0',
        component: FloorTwoIncidents,
        icon: <FaRegBuilding />,
        layout: '/user'
    },
    {
        path: '/planta-1',
        name: 'Planta -1',
        component: FloorThreeIncidents,
        icon: <FaRegBuilding />,
        layout: '/user'
    },
    {
        path: '/planta-2',
        name: 'Planta -2',
        component: FloorFourIncidents,
        icon: <FaRegBuilding />,
        layout: '/user'
    },
    {
        path: '/aulas',
        name: 'Aulas',
        component: PageClassrooms,
        icon: <SiGoogleclassroom />,
        layout: '/user'
    }
]

export default routes
