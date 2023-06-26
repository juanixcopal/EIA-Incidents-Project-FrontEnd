import { useState, useEffect } from 'react'

import { TextField, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import Loading from 'ui-component/loading'

import { CancelButton, SaveButton } from 'ui-component/button'

const EditUser = ({ useFetchInit }) => {
  const { dataModal, FetchRoles, onClose, Actions, prueba } = useFetchInit

  const { updateDataUser } = Actions
  const { id_rol, username, name, lastname, id_user } = dataModal.params

  const { roles, loadingRoles } = FetchRoles

  const [formData, setFormData] = useState({
    id_user: id_user,
    name: name,
    lastname: lastname,
    id_rol: id_rol
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  useEffect(() => {
    prueba(formData)
  }, [formData, prueba])

  return (
    <>
      <Loading loading={loadingRoles} />
      {!loadingRoles && (
        <form onSubmit={updateDataUser}>
          <Grid container direction='row' spacing={1} sx={{ pt: '16px !important' }}>
            <Grid item>
              <TextField label='Nombre de usuario' name='username' type='text' defaultValue={username} disabled />
            </Grid>

            <Grid item>
              <TextField label='Nombre' name='name' type='text' defaultValue={name} onChange={handleChange} />
            </Grid>

            <Grid item>
              <TextField label='Apellido' name='lastname' type='text' defaultValue={lastname} onChange={handleChange} />
            </Grid>
          </Grid>

          <Grid container direction='column' spacing={1} sx={{ pt: '16px !important' }}>
            <Grid item>
              <FormControl fullWidth>
                <InputLabel>Rol del usuario</InputLabel>
                <Select defaultValue={id_rol} label='Rol del usuario' name='id_rol' onChange={handleChange}>
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

export default EditUser
