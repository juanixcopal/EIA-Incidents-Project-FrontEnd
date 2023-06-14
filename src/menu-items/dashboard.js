import AvTimerIcon from '@mui/icons-material/AvTimer'

// assets
import { IconDashboard, IconTicket } from '@tabler/icons'

// constant
const icons = { IconDashboard, IconTicket }

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  // title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'que',
      title: 'Dashboard',
      type: 'item',
      url: '/que',
      icon: AvTimerIcon,
      breadcrumbs: false
    }
  ]
}

export default dashboard
