import { Grid, Typography, Box, Button, Avatar, Chip } from '@mui/material'

import MainCard from 'ui-component/cards/MainCard'
import Loading from 'ui-component/loading'

import { gridSpacing } from 'store/constant'

import { styled, useTheme } from '@mui/material/styles'

import EditIcon from '@mui/icons-material/Edit'

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}))

const ExpiredNotifications = ({ mainHook }) => {
  const theme = useTheme()

  const { fetchAllExpiredNotificationsActive, toggle } = mainHook

  const { expiredNotifications, loadingExpiredNotifications } = fetchAllExpiredNotificationsActive

  const chipSX = {
    height: 24,
    padding: '0 6px'
  }
  const chipErrorSX = {
    ...chipSX,
    color: theme.palette.orange.dark,
    backgroundColor: theme.palette.orange.light,
    marginRight: '5px'
  }

  const chipWarningSX = {
    ...chipSX,
    color: theme.palette.warning.dark,
    backgroundColor: theme.palette.warning.light
  }

  const chipSuccessSX = {
    ...chipSX,
    color: theme.palette.success.dark,
    backgroundColor: theme.palette.success.light,
    height: 28
  }

  return (
    <>
      <MainCard>
        <Loading loading={loadingExpiredNotifications} />
        {!loadingExpiredNotifications && (
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignContent='center' justifyContent='space-between'>
                <Grid item>
                  <Typography variant='h4'>Notificaciones expiradas</Typography>
                </Grid>
              </Grid>
            </Grid>

            {expiredNotifications.length >= 1 ? (
              <>
                {expiredNotifications.map(item => {
                  const { id_notificacion, nombre_notificacion, body_notificacion, fecha_vencimiento, prioridad, id_prioridad_notificacion } = item

                  return (
                    <Grid item xs={3} key={id_notificacion}>
                      <CardWrapper border={false} content={false}>
                        <Box sx={{ p: 2.25 }}>
                          <Grid container direction='column'>
                            <Grid item>
                              <Grid container justifyContent='space-between'>
                                <Grid item>
                                  <Typography sx={{ fontSize: '0.825rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{fecha_vencimiento}</Typography>
                                </Grid>

                                <Grid item>
                                  <Avatar
                                    variant='rounded'
                                    sx={{
                                      ...theme.typography.commonAvatar,
                                      ...theme.typography.mediumAvatar,
                                      backgroundColor: theme.palette.secondary.dark,
                                      color: theme.palette.secondary[200],
                                      zIndex: 1
                                    }}
                                  >
                                    <Button
                                      disableElevation
                                      size='small'
                                      sx={{ color: 'inherit' }}
                                      onClick={() => toggle(null, 'Editar Notificacion', 'edit-notification', item)}
                                    >
                                      <EditIcon />
                                    </Button>
                                  </Avatar>
                                </Grid>
                              </Grid>
                            </Grid>

                            <Grid item>
                              <Grid container alignItems='center'>
                                <Grid item>
                                  <Typography sx={{ fontSize: '1.525rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{nombre_notificacion}</Typography>
                                </Grid>
                              </Grid>
                            </Grid>

                            <Grid item>
                              <Grid container alignItems='center'>
                                <Grid item>
                                  <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{body_notificacion}</Typography>
                                </Grid>
                              </Grid>
                            </Grid>

                            <Grid item>
                              <Grid container>
                                <Grid item>
                                  {id_prioridad_notificacion === 1 ? (
                                    <Chip label={prioridad} sx={chipErrorSX} />
                                  ) : id_prioridad_notificacion === 2 ? (
                                    <Chip label={prioridad} sx={chipWarningSX} />
                                  ) : (
                                    <Chip label={prioridad} sx={chipSuccessSX} />
                                  )}
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Box>
                      </CardWrapper>
                    </Grid>
                  )
                })}
              </>
            ) : (
              <Grid container alignContent='center' justifyContent='center'>
                <Grid item>
                  <Typography variant='subtitle2'>No hay notificaciones expiradas</Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        )}
      </MainCard>
    </>
  )
}

export default ExpiredNotifications
