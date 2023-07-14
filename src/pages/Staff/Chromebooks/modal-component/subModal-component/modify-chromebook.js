import { useEffect, useState } from 'react'

import { TextField, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import { CancelButton, SaveButton } from 'ui-component/button'

const ModifyChromebook = ({ useFetchInit }) => {
  const { dataSubModal, FetchCarritosChromebook, FetchEstadosChromebook, subOnClose, handleChangeData, Actions } = useFetchInit

  const { updateDataChromebookAction } = Actions

  const { id_chromebook, id_armario, id_estado_chromebook, numero_chromebook, prodid, sn } = dataSubModal.subParams
  const { armarios } = FetchCarritosChromebook
  const { estadoChromebook } = FetchEstadosChromebook

  const [id_Carrito, setId_Carrito] = useState(id_armario)
  const [id_Estado_Chromebook, setId_Estado_Chromebook] = useState(id_estado_chromebook)

  const [formData, setFormData] = useState({
    id_chromebook: id_chromebook,
    id_estado_chromebook: id_Estado_Chromebook,
    id_armario: id_Carrito
  })

  const handleChange = event => {
    const { name, value } = event.target

    if (name === 'id_armario') {
      setId_Carrito(value)
      setFormData(prevFormData => ({
        ...prevFormData,
        id_armario: value
      }))
    } else if (name === 'id_estado_chromebook') {
      setId_Estado_Chromebook(value)
      setFormData(prevFormData => ({
        ...prevFormData,
        id_estado_chromebook: value
      }))
    }
  }

  useEffect(() => {
    handleChangeData(formData)
    // eslint-disable-next-line
  }, [formData, handleChange])

  return (
    <>
      <Grid container direction='row' spacing={1} sx={{ pt: '16px !important' }}>
        <Grid item>
          <TextField label='Chromebook #' disabled defaultValue={numero_chromebook} />
        </Grid>
        <Grid item>
          <TextField label='Prod ID' disabled defaultValue={prodid} />
        </Grid>

        <Grid item>
          <TextField label='SN' disabled defaultValue={sn} />
        </Grid>
      </Grid>

      <form onSubmit={updateDataChromebookAction}>
        <Grid container direction='column' spacing={1} sx={{ pt: '16px !important' }}>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel>Armario Chromebook</InputLabel>
              <Select value={id_Carrito} label='Carrito de Chromebook' onChange={handleChange} name='id_armario' required>
                {armarios.map(item => {
                  const { id_armario, numero_carrito } = item
                  return (
                    <MenuItem key={id_armario} value={id_armario}>
                      {numero_carrito}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container direction='column' spacing={1} sx={{ pt: '16px !important' }}>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel>Estado de la Chromebook</InputLabel>
              <Select value={id_Estado_Chromebook} label='Estado de la Chromebook' onChange={handleChange} name='id_estado_chromebook' required>
                {estadoChromebook.map(item => {
                  const { id_estado_chromebook, estado_chromebook } = item
                  return (
                    <MenuItem key={id_estado_chromebook} value={id_estado_chromebook}>
                      {estado_chromebook}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container alignContent='center' justifyContent='space-between' sx={{ pt: '16px !important' }}>
          <Grid item>
            <CancelButton disabled={false} title='Cancelar' onClick={subOnClose} />
          </Grid>
          <Grid item>
            <SaveButton disabled={false} title='Guardar' />
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default ModifyChromebook
