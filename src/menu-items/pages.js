import DataThresholdingOutlinedIcon from '@mui/icons-material/DataThresholdingOutlined'
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined'
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined'
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook'
import ApartmentIcon from '@mui/icons-material/Apartment'
import DomainAddIcon from '@mui/icons-material/DomainAdd'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'

const icons = {
  DataThresholdingOutlinedIcon,
  ComputerOutlinedIcon,
  DomainAddOutlinedIcon,
  GroupOutlinedIcon,
  InsertChartOutlinedOutlinedIcon,
  LaptopChromebookIcon,
  ApartmentIcon,
  DomainAddIcon,
  PlaylistAddCheckIcon
}

const userRoles = ['administrador', 'usuario', 'superadmin']
const adminRoles = ['administrador', 'superadmin']
// const superadminRol = ['superadmin']

const pages = {
  id: 'dashboard',
  title: 'Paginas principales',
  type: 'group',
  children: [
    {
      id: 'datos-os-ticket',
      title: 'Datos OsTicket',
      type: 'item',
      url: '/datos-os-ticket',
      icon: icons.DataThresholdingOutlinedIcon,
      breadcrumbs: false,
      visible: userRoles
    },
    {
      id: 'chromebooks',
      title: 'Chromebooks',
      type: 'item',
      url: '/chromebooks',
      icon: icons.LaptopChromebookIcon,
      breadcrumbs: false,
      visible: userRoles
    },
    {
      id: 'usuarios',
      title: 'Usuarios',
      type: 'item',
      url: '/usuarios',
      icon: icons.GroupOutlinedIcon,
      breadcrumbs: false,
      visible: adminRoles
    },
    {
      id: 'estadisticas',
      title: 'Estadisticas',
      type: 'item',
      url: '/estadisticas',
      icon: icons.InsertChartOutlinedOutlinedIcon,
      breadcrumbs: false,
      visible: userRoles
    },
    {
      id: 'inventario',
      title: 'Inventario',
      type: 'item',
      url: '/inventario',
      icon: icons.PlaylistAddCheckIcon,
      breadcrumbs: false,
      visible: adminRoles
    }
  ]
}

export default pages
