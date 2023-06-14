import { lazy } from 'react'

// project imports
import MainLayout from '../layout/MainLayout/index'
import Loadable from '../ui-component/Loadable'

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../pages/others/index')))
const Others = Loadable(lazy(() => import('../pages/Staff/index')))

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')))
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')))
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')))
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')))
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')))

// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')))

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          // path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'que',
      children: [
        {
          // path: 'default',
          element: <Others />
        }
      ]
    }
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-typography',
    //       element: <UtilsTypography />
    //     }
    //   ]
    // },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-color',
    //       element: <UtilsColor />
    //     }
    //   ]
    // },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-shadow',
    //       element: <UtilsShadow />
    //     }
    //   ]
    // },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'tabler-icons',
    //       element: <UtilsTablerIcons />
    //     }
    //   ]
    // },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'material-icons',
    //       element: <UtilsMaterialIcons />
    //     }
    //   ]
    // },
    // {
    //   path: 'sample-page',
    //   element: <SamplePage />
    // }
  ]
}

export default MainRoutes
