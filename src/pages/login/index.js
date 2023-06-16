import { useTheme } from '@mui/material/styles'
import { Avatar, Button, TextField, Box, Typography, Container, Card, CardContent, InputAdornment, IconButton, useMediaQuery } from '@mui/material'
import LockPersonIcon from '@mui/icons-material/LockPerson'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'

import { useFetchInitLogin } from '../../hooks/login/index'

const Login = () => {
  const homepage = () => {
    console.log('Homepage')
  }

  const theme = useTheme()
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'))

  const FetchInitLoging = useFetchInitLogin()

  const { handleInputChange, login, message, loading, handleTogglePasswordVisibility, showPassword } = FetchInitLoging

  const { message: _message, result } = message

  return (
    <>
      <Container component='main' maxWidth='xs' style={{ paddingTop: '8%' }}>
        <Card style={{ borderRadius: '5%', background: '#EFEEEE' }}>
          <CardContent>
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Avatar style={{ background: '#7ac4eb' }}>
                <LockPersonIcon />
              </Avatar>
              <Typography color={theme.palette.primary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                Inicio de sesión
              </Typography>
              <Box component='form' noValidate sx={{ mt: 1 }} onSubmit={login}>
                <TextField margin='normal' required fullWidth label='Usuario' name='username' autoComplete='username' onChange={handleInputChange} autoFocus />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Contraseña'
                  type={showPassword ? 'text' : 'password'}
                  autoComplete='current-password'
                  onChange={handleInputChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleTogglePasswordVisibility}>{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                {loading ? (
                  <span className='text-success'>Ingresando.........</span>
                ) : (
                  <span className={`text-${result ? 'success' : 'danger'}`}>{_message}</span>
                )}
                <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                  Acceder
                </Button>
                <Button fullWidth sx={{ mt: 3, mb: 2 }} onClick={homepage}>
                  Página Principal
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default Login
