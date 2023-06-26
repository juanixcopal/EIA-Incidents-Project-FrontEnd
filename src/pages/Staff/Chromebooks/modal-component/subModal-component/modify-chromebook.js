import { useState } from 'react'

import { TextField, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const ModifyChromebook = ({ useFetchInit }) => {
  const { dataSubModal, FetchCarritosChromebook, FetchEstadosChromebook, handleInputChange } = useFetchInit

  const { armario, id_estado_chromebook, numero_chromebook, prodid, sn } = dataSubModal.subParams
  const { armarios } = FetchCarritosChromebook
  const { estadoChromebook } = FetchEstadosChromebook

  const [id_Carrito, setId_Carrito] = useState(armario)
  const [id_Estado_Chromebook, setId_Estado_Chromebook] = useState(id_estado_chromebook)

  const handleChangeCupboard = e => {
    setId_Carrito(e.target.value)
    handleInputChange(e)
  }

  const handleChangeStateChromebook = e => {
    setId_Estado_Chromebook(e.target.value)
    handleInputChange(e)
  }

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

      <Grid container direction='column' spacing={1} sx={{ pt: '16px !important' }}>
        <Grid item>
          <FormControl fullWidth>
            <InputLabel>Armario Chromebook</InputLabel>
            <Select value={id_Carrito} label='Carrito de Chromebook' onChange={handleChangeCupboard} name='id_carrito' required>
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
            <Select value={id_Estado_Chromebook} label='Estado de la Chromebook' onChange={handleChangeStateChromebook} name='id_estado_chromebook' required>
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
    </>
  )
}

export default ModifyChromebook
