import { useState, useRef, useEffect } from 'react'

import { useTheme } from '@mui/material/styles'
import {
  Avatar,
  Box,
  ButtonBase,
  ClickAwayListener,
  Divider,
  Grid,
  Paper,
  Popper,
  Stack,
  Typography,
  useMediaQuery,
  CardActions,
  Button,
  Badge
} from '@mui/material'

import PerfectScrollbar from 'react-perfect-scrollbar'

import MainCard from '../../../../ui-component/cards/MainCard'
import Transitions from '../../../../ui-component/extended/Transitions'
import NotificationList from './NotificationList'

import { IconBell } from '@tabler/icons'

import { useFetchInitNotifications } from 'hooks/notifications'

const NotificationSection = () => {
  const mainHook = useFetchInitNotifications()

  const { fetchAllNotificationsActive } = mainHook

  const { notifications } = fetchAllNotificationsActive

  const theme = useTheme()
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'))

  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }
    prevOpen.current = open
  }, [open])

  return (
    <>
      <Box
        sx={{
          ml: 2,
          mr: 3,
          [theme.breakpoints.down('md')]: {
            mr: 2
          }
        }}
      >
        <Badge badgeContent={notifications.length} color='primary'>
          <ButtonBase sx={{ borderRadius: '12px' }}>
            <Avatar
              variant='rounded'
              sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.mediumAvatar,
                transition: 'all .2s ease-in-out',
                background: theme.palette.primary[50],
                color: theme.palette.primary.dark,
                '&[aria-controls="menu-list-grow"],&:hover': {
                  background: theme.palette.primary.dark,
                  color: theme.palette.primary[50]
                }
              }}
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup='true'
              onClick={handleToggle}
              color='inherit'
            >
              <IconBell stroke={1.5} size='1.3rem' />
            </Avatar>
          </ButtonBase>
        </Badge>
      </Box>
      <Popper
        placement={matchesXs ? 'bottom' : 'bottom-end'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [matchesXs ? 5 : 0, 20]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions position={matchesXs ? 'top' : 'top-right'} in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                  <Grid container direction='column' spacing={2}>
                    <Grid item xs={12}>
                      <Grid container alignItems='center' justifyContent='space-between' sx={{ pt: 2, px: 2 }}>
                        <Grid item>
                          <Stack direction='row' spacing={2}>
                            <Typography variant='subtitle1'>Notificaciones</Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <PerfectScrollbar style={{ height: '100%', maxHeight: 'calc(100vh - 205px)', overflowX: 'hidden' }}>
                        <Grid container direction='column' spacing={2}>
                          <Grid item xs={12}>
                            <Box sx={{ px: 2, pt: 0.25 }}></Box>
                          </Grid>
                          <Grid item xs={12} p={0}>
                            <Divider sx={{ my: 0 }} />
                          </Grid>
                        </Grid>
                        <NotificationList mainHook={mainHook} />
                      </PerfectScrollbar>
                    </Grid>
                  </Grid>
                  <Divider />
                  <CardActions sx={{ p: 1.25, justifyContent: 'center' }}>
                    <Button size='small' disableElevation>
                      Ver todo
                    </Button>
                  </CardActions>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  )
}

export default NotificationSection
