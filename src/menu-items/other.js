import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
const icons = { AccountCircleOutlinedIcon }

const superAdminRole = ['superadmin']

const other = {
  id: 'others',
  title: 'Páginas administración',
  type: 'group',
  children: [
    {
      id: 'perfil',
      title: 'Perfil',
      type: 'item',
      url: '/perfil',
      icon: icons.AccountCircleOutlinedIcon,
      breadcrumbs: false,
      visible: superAdminRole
    }
  ]
}

export default other
