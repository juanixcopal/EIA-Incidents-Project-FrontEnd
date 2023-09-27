import { useTheme, styled } from '@mui/material/styles'
import { Avatar, Chip, Divider, Grid, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material'

import PriorityHighIcon from '@mui/icons-material/PriorityHigh'

import TimeAgo from './TimeAgo'

const ListItemWrapper = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  padding: 16,
  '&:hover': {
    background: theme.palette.primary.light
  },
  '& .MuiListItem-root': {
    padding: 0
  }
}))

const NotificationList = ({ mainHook }) => {
  const { fetchAllNotificationsActive } = mainHook

  const { notifications } = fetchAllNotificationsActive

  const theme = useTheme()

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
    <List
      sx={{
        width: '100%',
        maxWidth: 330,
        py: 0,
        borderRadius: '10px',
        [theme.breakpoints.down('md')]: {
          maxWidth: 300
        },
        '& .MuiListItemSecondaryAction-root': {
          top: 22
        },
        '& .MuiDivider-root': {
          my: 0
        },
        '& .list-container': {
          pl: 7
        }
      }}
    >
      {notifications.map(item => {
        const { id_notificacion, nombre_notificacion, body_notificacion, tiempo_transcurrido, prioridad, id_prioridad_notificacion } = item

        return (
          <div key={id_notificacion}>
            <ListItemWrapper>
              <ListItem alignItems='center'>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      color: theme.palette.warning.dark,
                      backgroundColor: theme.palette.warning.light,
                      border: 'none',
                      borderColor: theme.palette.warning.main
                    }}
                  >
                    <PriorityHighIcon stroke={1.5} size='1.3rem' />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Typography variant='subtitle1'>{nombre_notificacion}</Typography>} />
                <ListItemSecondaryAction>
                  <TimeAgo minutesAgo={tiempo_transcurrido} />
                </ListItemSecondaryAction>
              </ListItem>
              <Grid container direction='column' className='list-container'>
                <Grid item xs={12} sx={{ pb: 2 }}>
                  <Typography variant='subtitle2'>{body_notificacion}</Typography>
                </Grid>
                <Grid item xs={12}>
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
            </ListItemWrapper>
            <Divider />
          </div>
        )
      })}
      <Divider />
    </List>
  )
}

export default NotificationList
