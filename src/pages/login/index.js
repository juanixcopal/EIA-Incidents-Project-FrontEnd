import React from 'react'
import { Avatar, Button, CssBaseline, TextField, Box, Typography, Container } from '@mui/material'
import LockPersonIcon from '@mui/icons-material/LockPerson'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useFetchInitLogin } from '../../hooks/login/index'

const Login = () => {
  const theme = createTheme()
  const FetchInit = useFetchInitLogin()
  const { handleInputChange, login, message, loading } = FetchInit

  const homepage = () => {
    window.location.href = '/'
  }

  const { message: _message, result } = message

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, background: '#017dc0' }}>
            <LockPersonIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Inicio de sesión
          </Typography>
          <Box component='form' noValidate sx={{ mt: 1 }} onSubmit={login}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='username'
              label='Usuario'
              name='username'
              autoComplete='username'
              onChange={handleInputChange}
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Contraseña'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={handleInputChange}
            />
            {loading ? <span className='text-success'>Ingresando.........</span> : <span className={`text-${result ? 'success' : 'danger'}`}>{_message}</span>}
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Acceder
            </Button>
            <Button fullWidth sx={{ mt: 3, mb: 2 }} onClick={homepage}>
              Página Principal
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Login
