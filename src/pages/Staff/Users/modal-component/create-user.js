import { TextField, Grid, FormControl, InputLabel, Select, MenuItem, InputAdornment, IconButton } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Loading from 'ui-component/loading'
import { CancelButton, SaveButton } from 'ui-component/button'

const CreateUser = ({ useFetchInit }) => {
  const {
    FetchRoles,
    onClose,
    Actions,
    handleInputChange,
    showPassword,
    handleTogglePasswordVisibility,
    handleTogglePasswordRepeatVisibility,
    showPasswordRepeat
  } = useFetchInit

  const { roles, loadingRoles } = FetchRoles

  const { createUser } = Actions

  return (
    <>
      <Loading loading={loadingRoles} />
      {!loadingRoles && (
        <form onSubmit={createUser}>
          <Grid container direction='row' spacing={1} sx={{ pt: '16px !important' }}>
            <Grid item>
              <TextField label='Nombre' name='name' type='text' onChange={handleInputChange} required />
            </Grid>

            <Grid item>
              <TextField label='Apellido' name='lastname' type='text' onChange={handleInputChange} required />
            </Grid>

            <Grid item>
              <TextField label='Nombre de usuario' name='username' type='text' onChange={handleInputChange} required />
            </Grid>
          </Grid>

          <Grid container direction='row' spacing={1} sx={{ pt: '16px !important' }} justifyContent='center'>
            <Grid item>
              <TextField
                label='Contraseña'
                name='password'
                type={showPassword ? 'text' : 'password'}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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

          <Grid container direction='column' spacing={1} sx={{ pt: '16px !important' }}>
            <Grid item>
              <FormControl fullWidth>
                <InputLabel required>Rol del usuario</InputLabel>
                <Select defaultValue='' label='Rol del usuario' name='id_rol' onChange={handleInputChange} required>
                  {roles.map(item => {
                    const { id_rol, rol_usuario } = item
                    return (
                      <MenuItem key={id_rol} value={id_rol}>
                        {rol_usuario}
                      </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container alignContent='center' justifyContent='space-between' sx={{ pt: '16px !important' }}>
            <Grid item>
              <CancelButton disabled={loadingRoles} title='Cancelar' onClick={onClose} />
            </Grid>
            <Grid item>
              <SaveButton disabled={loadingRoles} title='Guardar' />
            </Grid>
          </Grid>
        </form>
      )}
    </>
  )
}

export default CreateUser
