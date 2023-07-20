import { Grid, TextField } from '@mui/material'
import { useState, useEffect } from 'react'
import { CancelButton, SaveButton } from 'ui-component/button'

const EditNotification = ({ useFetchInit }) => {
  const { dataModal, formattedDate, handleChangeDate, Actions, onClose } = useFetchInit

  const { id_notificacion, nombre_notificacion, body_notificacion, fecha_tiempo, prioridad } = dataModal.params
  const { expirationDateUpdate } = Actions

  const [formData, setFormData] = useState({
    id_notificacion: id_notificacion,
    fecha_vencimiento: fecha_tiempo
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  useEffect(() => {
    handleChangeDate(formData)
  }, [formData, handleChangeDate])

  return (
    <>
      <form onSubmit={expirationDateUpdate}>
        <Grid container direction='row' spacing={1} sx={{ pt: '16px !important' }}>
          <Grid item>
            <TextField label='Titulo Notificación' defaultValue={nombre_notificacion} disabled />
          </Grid>
          <Grid item>
            <TextField label='Mensaje de notificacion' defaultValue={body_notificacion} multiline disabled />
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
              defaultValue={fecha_tiempo}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>

        <Grid container direction='column' spacing={1} sx={{ pt: '16px !important' }}>
          <Grid item>
            <TextField label='Prioridad de la notificación' defaultValue={prioridad} disabled fullWidth />
          </Grid>
        </Grid>

        <Grid container alignContent='center' justifyContent='space-between' sx={{ pt: '16px !important' }}>
          <Grid item>
            <CancelButton title='Cancelar' onClick={onClose} />
          </Grid>
          <Grid item>
            <SaveButton title='Guardar' />
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default EditNotification
