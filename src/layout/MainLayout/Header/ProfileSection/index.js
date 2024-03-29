import { useState, useRef, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useTheme } from '@mui/material/styles'
import { Avatar, Box, Chip, ClickAwayListener, List, ListItemButton, ListItemIcon, ListItemText, Paper, Popper, Stack, Typography } from '@mui/material'

import MainCard from '../../../../ui-component/cards/MainCard'
import Transitions from 'ui-component/extended/Transitions'

import { IconLogout, IconSettings, IconTicket, IconHourglass } from '@tabler/icons'

const ProfileSection = () => {
  const theme = useTheme()
  const customization = useSelector(state => state.customization)
  const navigate = useNavigate()

  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [open, setOpen] = useState(false)

  const anchorRef = useRef(null)

  const handleLogout = (event, index, route = '') => {
    setSelectedIndex(index)
    handleClose(event)

    if (route && route !== '') {
      navigate(route)
    }

    localStorage.clear()
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  const fullName = localStorage.getItem('fullName')

  return (
    <>
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          borderColor: theme.palette.primary[50],
          backgroundColor: theme.palette.primary[50],
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary[50],
            '& svg': {
              stroke: theme.palette.primary[50]
            }
          },
          '& .MuiChip-label': {
            lineHeight: 0
          }
        }}
        icon={
          <Avatar
            sx={{
              ...theme.typography.mediumAvatar,
              margin: '8px 0 8px 8px !important',
              cursor: 'pointer'
            }}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup='true'
            color='inherit'
          />
        }
        label={<IconSettings stroke={1.5} size='1.5rem' color={theme.palette.primary.main} />}
        variant='outlined'
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
        color='primary'
      />
      <Popper
        placement='bottom-end'
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
                offset: [0, 14]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                  <Box sx={{ p: 2 }}>
                    <Stack direction='row' spacing={0.5} alignItems='center'>
                      <Typography variant='h4'>Bienvenid@,</Typography>
                      <Typography component='span' variant='h4' sx={{ fontWeight: 400 }}>
                        {fullName || 'User'}
                      </Typography>
                    </Stack>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <List
                      component='nav'
                      sx={{
                        width: '100%',
                        maxWidth: 350,
                        minWidth: 300,
                        backgroundColor: theme.palette.background.paper,
                        [theme.breakpoints.down('md')]: {
                          minWidth: '100%'
                        },
                        '& .MuiListItemButton-root': {
                          mt: 0.5
                        }
                      }}
                    >
                      <ListItemButton
                        sx={{ borderRadius: `${customization.borderRadius}px` }}
                        selected={selectedIndex === 0}
                        onClick={() => window.open('https://kronos.ctdesarrollo-sdr.org/', '_blank')}
                      >
                        <ListItemIcon>
                          <IconHourglass stroke={1.5} size='1.3rem' />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2'>Página Kronos</Typography>} />
                      </ListItemButton>

                      <ListItemButton
                        sx={{ borderRadius: `${customization.borderRadius}px` }}
                        selected={selectedIndex === 0}
                        onClick={() => window.open('https://soporte.uneatlantico.es/scp/', '_blank')}
                      >
                        <ListItemIcon>
                          <IconTicket stroke={1.5} size='1.3rem' />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2'>Página de OsTicket</Typography>} />
                      </ListItemButton>

                      <ListItemButton
                        sx={{ borderRadius: `${customization.borderRadius}px` }}
                        selected={selectedIndex === 1}
                        onClick={event => handleLogout(event, 1, 'login')}
                      >
                        <ListItemIcon>
                          <IconLogout stroke={1.5} size='1.3rem' />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2'>Cerrar Sesión</Typography>} />
                      </ListItemButton>
                    </List>
                  </Box>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  )
}

export default ProfileSection
