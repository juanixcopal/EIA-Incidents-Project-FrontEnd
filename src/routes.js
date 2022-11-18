import FloorOneIncidents from './pages/staff/floorOneIncidents'
import FloorTwoIncidents from 'pages/staff/flooeTwoIncidents'
import PageClassrooms from 'pages/staff/classrooms'
import { MdOutlineAccountBalance, MdViewList } from 'react-icons/md'

var routes = [
    {
        path: '/planta1',
        name: 'Planta 1',
        component: FloorOneIncidents,
        icon: <MdOutlineAccountBalance />,
        layout: '/user'
    },
    {
        path: '/planta2',
        name: 'Planta 2',
        component: FloorTwoIncidents,
        icon: <MdOutlineAccountBalance />,
        layout: '/user'
    },
    {
        path: '/aulas',
        name: 'Aulas',
        component: PageClassrooms,
        icon: <MdViewList />,
        layout: '/user'
    }
]

export default routes
