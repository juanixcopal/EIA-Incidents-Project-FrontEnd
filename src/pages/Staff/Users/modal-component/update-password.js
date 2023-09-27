import { Grid, TextField, InputAdornment, IconButton } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { CancelButton, SaveButton } from 'ui-component/button'

const UpdatePassword = ({ useFetchInit }) => {
  const {
    onClose,
    showPassword,
    handleTogglePasswordVisibility,
    handleTogglePasswordRepeatVisibility,
    showPasswordRepeat,
    handleInputChangeUpdatePassword,
    Actions,
    dataModal
  } = useFetchInit

  const { username } = dataModal.params

  const { updatePassword } = Actions

  return (
    <>
      <form onSubmit={updatePassword}>
        <Grid item>
          <TextField label='Nombre de usuario' defaultValue={username} disabled fullWidth />
        </Grid>
        <Grid container direction='row' spacing={1} sx={{ pt: '16px !important' }} justifyContent='center'>
          <Grid item>
            <TextField
              label='Contraseña'
              name='password'
              type={showPassword ? 'text' : 'password'}
              onChange={handleInputChangeUpdatePassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleTogglePasswordVisibility}>{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton>
                  </InputAdornment>
                )
              }}
              required
            />
          </Grid>

          <Grid item>
            <TextField
              label='Repite Contraseña'
              name='password_repeat'
              type={showPasswordRepeat ? 'text' : 'password'}
              onChange={handleInputChangeUpdatePassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleTogglePasswordRepeatVisibility}>{showPasswordRepeat ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton>
                  </InputAdornment>
                )
              }}
              required
            />
          </Grid>
        </Grid>

        <Grid container alignContent='center' justifyContent='space-between' sx={{ pt: '16px !important' }}>
          <Grid item>
            <CancelButton disabled={false} title='Cancelar' onClick={onClose} />
          </Grid>
          <Grid item>
            <SaveButton disabled={false} title='Guardar' />
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default UpdatePassword
