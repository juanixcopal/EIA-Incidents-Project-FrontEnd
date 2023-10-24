import { lazy } from 'react'

import { Navigate } from 'react-router-dom'

import MainLayout from '../layout/MainLayout/index'
import Loadable from '../ui-component/Loadable'

const OsTicket = Loadable(lazy(() => import('../pages/Staff/OsTicket_Data/index')))
const Chromebooks = Loadable(lazy(() => import('../pages/Staff/Chromebooks/index')))
const Users = Loadable(lazy(() => import('../pages/Staff/Users/index')))
const Statistics = Loadable(lazy(() => import('../pages/Staff/Statistics/index')))
const Inventory = Loadable(lazy(() => import('../pages/Staff/Classrooms/index')))
const Notificaction = Loadable(lazy(() => import('../pages/Staff/NotificationsManager/index')))

const LabelUEAA = Loadable(lazy(() => import('../pages/Staff/Classrooms/inventoryLabel/labelUEAA')))
const LabelUEAB = Loadable(lazy(() => import('../pages/Staff/Classrooms/inventoryLabel/labelUEAB')))
const LabelUEAC = Loadable(lazy(() => import('../pages/Staff/Classrooms/inventoryLabel/labelUEAC')))
const LabelUEAD = Loadable(lazy(() => import('../pages/Staff/Classrooms/inventoryLabel/labelUEAD')))
const LabelUEAE = Loadable(lazy(() => import('../pages/Staff/Classrooms/inventoryLabel/labelUEAE')))

const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  return !!token
}

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: isAuthenticated() ? <OsTicket /> : <Navigate to='/login' replace={true} />
    },
    {
      path: 'datos-os-ticket',
      element: isAuthenticated() ? <OsTicket /> : <Navigate to='/login' replace={true} />
    },
    {
      path: 'chromebooks',
      element: isAuthenticated() ? <Chromebooks /> : <Navigate to='/login' replace={true} />
    },
    {
      path: 'usuarios',
      element: isAuthenticated() ? <Users /> : <Navigate to='/login' replace={true} />
    },
    {
      path: 'estadisticas',
      element: isAuthenticated() ? <Statistics /> : <Navigate to='/login' replace={true} />
    },
    {
      path: 'notificaciones',
      element: isAuthenticated() ? <Notificaction /> : <Navigate to='/login' replace={true} />
    },
    {
      path: 'inventario',
      element: isAuthenticated() ? <Inventory /> : <Navigate to='/login' replace={true} />
    },
    {
      path: 'inventario/UEA-A',
      element: isAuthenticated() ? <LabelUEAA /> : <Navigate to='/login' replace={true} />
    },
    {
      path: 'inventario/UEA-B',
      element: isAuthenticated() ? <LabelUEAB /> : <Navigate to='/login' replace={true} />
    },
    {
      path: 'inventario/UEA-C',
      element: isAuthenticated() ? <LabelUEAC /> : <Navigate to='/login' replace={true} />
    },
    {
      path: 'inventario/UEA-D',
      element: isAuthenticated() ? <LabelUEAD /> : <Navigate to='/login' replace={true} />
    },
    {
      path: 'inventario/UEA-E',
      element: isAuthenticated() ? <LabelUEAE /> : <Navigate to='/login' replace={true} />
    }
  ]
}

export default MainRoutes
