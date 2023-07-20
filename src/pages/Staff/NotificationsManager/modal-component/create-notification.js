import { useState } from 'react'

import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import { CancelButton, SaveButton } from 'ui-component/button'

const CreateNotification = ({ useFetchInit }) => {
  const { fetchAllNotificationPriorities, handleInputChange, Actions, onClose, formattedDate } = useFetchInit

  const { notificationPriority, loadingNotificationPriority } = fetchAllNotificationPriorities
  const { createNotification } = Actions

  const [id_prioridad_notificacion, setId_prioridad_notificacion] = useState('')

  const handleChangePriority = e => {
    setId_prioridad_notificacion(e.target.value)
    handleInputChange(e)
  }

  return (
    <>
      <form onSubmit={createNotification}>
        <Grid container direction='row' spacing={1} sx={{ pt: '16px !important' }}>
          <Grid item>
            <TextField label='Titulo Notificación' name='nombre_notificacion' type='text' onChange={handleInputChange} required />
          </Grid>
          <Grid item>
            <TextField label='Mensaje de notificacion' name='body_notificacion' type='text' onChange={handleInputChange} required multiline />
          </Grid>

          <Grid item>
            <TextField
              label='Fecha de vencimiento'
              name='fecha_vencimiento'
              type='datetime-local'
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                inputProps: {
                  min: formattedDate
                }
              }}
              onChange={handleInputChange}
              required
            />
          </Grid>
        </Grid>

        <Grid container direction='column' spacing={1} sx={{ pt: '16px !important' }}>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel required>Prioridad de la notificación</InputLabel>
              <Select
                value={id_prioridad_notificacion}
                label='Prioridad de la notificación'
                onChange={handleChangePriority}
                name='id_prioridad_notificacion'
                required
              >
                {notificationPriority.map(item => {
                  const { id_prioridad_notificacion, prioridad } = item

                  return (
                    <MenuItem key={id_prioridad_notificacion} value={id_prioridad_notificacion}>
                      {prioridad}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container alignContent='center' justifyContent='space-between' sx={{ pt: '16px !important' }}>
          <Grid item>
            <CancelButton disabled={loadingNotificationPriority} title='Cancelar' onClick={onClose} />
          </Grid>
          <Grid item>
            <SaveButton disabled={loadingNotificationPriority} title='Guardar' />
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default CreateNotification
