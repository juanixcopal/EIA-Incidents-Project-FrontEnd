import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined'
import PestControlIcon from '@mui/icons-material/PestControl'

const icons = { CircleNotificationsOutlinedIcon, PestControlIcon }

const superAdminRole = ['superadmin']

const other = {
  id: 'others',
  title: 'Páginas administración',
  type: 'group',
  children: [
    {
      id: 'notificaciones',
      title: 'Notificaciones',
      type: 'item',
      url: '/notificaciones',
      icon: icons.CircleNotificationsOutlinedIcon,
      breadcrumbs: false,
      visible: superAdminRole
    }
  ]
}

export default other
