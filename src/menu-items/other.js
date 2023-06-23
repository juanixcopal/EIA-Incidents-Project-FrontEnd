import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
const icons = { AccountCircleOutlinedIcon }

const userRoles = ['administrador', 'usuario', 'superadmin']

const other = {
  id: 'others',
  title: 'Perfil',
  type: 'group',
  children: [
    {
      id: 'perfil',
      title: 'Perfil',
      type: 'item',
      url: '/perfil',
      icon: icons.AccountCircleOutlinedIcon,
      breadcrumbs: false,
      visible: userRoles
    }
  ]
}

export default other
