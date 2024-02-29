import { useTheme } from '@mui/material/styles'
import { Avatar, Button, TextField, Box, Typography, Container, Card, CardContent, InputAdornment, IconButton, Grid, CardActions } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import LanguageIcon from '@mui/icons-material/Language'

import { useFetchInitLogin } from '../../hooks/login/index'

const Login = () => {
  const theme = useTheme()

  const FetchInitLoging = useFetchInitLogin()

  const { handleInputChange, login, message, loading, handleTogglePasswordVisibility, showPassword } = FetchInitLoging

  const { message: _message, result } = message

  return (
    <>
      <Container component='main' maxWidth='xs' style={{ paddingTop: '10%' }}>
        <Grid container justifyContent='center'>
          <Card style={{ background: theme.palette.primary[50] }}>
            <form onSubmit={login}>
              <CardContent>
                <Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center' //Se quita cuando se ponga imagen
                  paddingBottom={'30px'}
                >
                  <Avatar>
                    <LanguageIcon />
                  </Avatar>
                  <Typography variant='h2' style={{ marginLeft: '16px' }}>
                    ATLAS
                  </Typography>
                </Box>

                <Box>
                  <TextField label='Usuario' margin='normal' required fullWidth name='username' autoComplete='username' onChange={handleInputChange} />
                  <TextField
                    label='Contraseña'
                    margin='normal'
                    required
                    fullWidth
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    autoComplete='current-password'
                    onChange={handleInputChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton onClick={handleTogglePasswordVisibility}> {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />} </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                  {loading ? (
                    <Typography color='green'>Ingresando.........</Typography>
                  ) : (
                    <Typography color={`${result ? 'green' : 'red'}`}>{_message}</Typography>
                  )}
                </Box>
              </CardContent>
              <CardActions>
                <Button type='submit' fullWidth variant='contained' style={{ background: theme.palette.primary.main }}>
                  Acceder
                </Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Container>
    </>
  )
}

export default Login
