import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
const icons = { AccountCircleOutlinedIcon }

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
      breadcrumbs: false
    }
  ]
}

export default other
