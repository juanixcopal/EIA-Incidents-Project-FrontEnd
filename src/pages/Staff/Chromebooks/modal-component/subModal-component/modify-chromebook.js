import { useState } from 'react'

import { TextField, Box, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const ModifyChromebook = ({ useFetchInit }) => {
  const { dataSubModal, FetchCarritosChromebook, handleInputChangeModify, FetchEstadosChromebook } = useFetchInit

  const { armario, estado_chromebook, id_chromebook, id_estado_chromebook, numero_chromebook, prodid, sn } = dataSubModal.subParams
  const { armarios } = FetchCarritosChromebook
  const { estadoChromebook } = FetchEstadosChromebook

  const [id_Carrito, setId_Carrito] = useState(armario)
  const [id_Estado_Chromebook, setId_Estado_Chromebook] = useState(id_estado_chromebook)

  const handleChangeCarrito = e => {
    setId_Carrito(e.target.value)
    handleInputChangeModify(e)
  }

  const handleChangeEstadoChromebook = e => {
    setId_Estado_Chromebook(e.target.value)
    handleInputChangeModify(e)
  }

  return (
    <>
      {/* <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: 'auto' }
        }}
        noValidate
        autoComplete='off'
      > */}
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
            <Select value={id_Carrito} label='Carrito de Chromebook' onChange={handleChangeCarrito} name='id_carrito' required>
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
            <Select value={id_Estado_Chromebook} label='Estado de la Chromebook' onChange={handleChangeEstadoChromebook} name='id_estado_chromebook' required>
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

      {/* </Box> */}
    </>
  )
}

export default ModifyChromebook
