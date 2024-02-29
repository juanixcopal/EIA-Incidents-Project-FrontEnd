import { useContext } from 'react'
import { Grid, Button } from '@mui/material'
import { gridSpacing } from 'store/constant'
import { useTheme } from '@emotion/react'

import ExpiredNotifications from './expiredNotifications'

import { AuthContext } from 'provider/global.provider'

import { useFetchInitNotificationsManager } from '../../../hooks/notificationsManager/index'

import NotificationAddIcon from '@mui/icons-material/NotificationAdd'
import MainModal from './modal-component'

const NotificactionPage = () => {
  const theme = useTheme()
  const { authData } = useContext(AuthContext)
  const rol = authData.rol_usuario

  const mainHook = useFetchInitNotificationsManager()

  const { toggle } = mainHook

  return (
    <>
      <MainModal useFetchInit={mainHook} />
      <Grid container spacing={gridSpacing}>
        {rol === 'superadmin' && (
          <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container alignContent='center' justifyContent='space-between' sx={{ pb: '16px !important' }}>
                  <Grid item>
                    <Button
                      variant='contained'
                      startIcon={<NotificationAddIcon />}
                      style={{ background: theme.palette.primary.main }}
                      onClick={() => toggle(null, 'Crear Notificacion', 'create-notification')}
                    >
                      Crear Notificacion
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}

        <Grid item xs={12}>
          <ExpiredNotifications mainHook={mainHook} />
        </Grid>
      </Grid>
    </>
  )
}

export default NotificactionPage
