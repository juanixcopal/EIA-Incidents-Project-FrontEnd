import { useContext } from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '@mui/material/styles'
import { Divider, List, Typography } from '@mui/material'

import { AuthContext } from 'provider/global.provider'

import NavItem from '../NavItem'
import NavCollapse from '../NavCollapse'

const NavGroup = ({ item }) => {
  const theme = useTheme()

  const { authData } = useContext(AuthContext)
  const rol = authData.rol_usuario

  const items = item.children?.map(menu => {
    if (menu.visible) {
      if (Array.isArray(menu.visible) && !menu.visible.includes(rol)) {
        return null
      } else if (typeof menu.visible === 'string' && menu.visible !== rol) {
        return null
      }
    } else {
      return null
    }

    switch (menu.type) {
      case 'collapse':
        return <NavCollapse key={menu.id} menu={menu} level={1} />
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1} />
      default:
        return (
          <Typography key={menu.id} variant='h6' color='error' align='center'>
            Menu Items Error
          </Typography>
        )
    }
  })

  const visibleItems = items.filter(item => item !== null)

  if (visibleItems.length === 0) {
    return null
  }

  return (
    <>
      <List
        subheader={
          item.title && (
            <Typography variant='caption' sx={{ ...theme.typography.menuCaption }} display='block' gutterBottom>
              {item.title}
              {item.caption && (
                <Typography variant='caption' sx={{ ...theme.typography.subMenuCaption }} display='block' gutterBottom>
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {visibleItems}
      </List>

      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  )
}

NavGroup.propTypes = {
  item: PropTypes.object
}

export default NavGroup
