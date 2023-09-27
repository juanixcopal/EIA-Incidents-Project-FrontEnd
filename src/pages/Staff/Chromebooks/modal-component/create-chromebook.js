import { useState } from 'react'

import { TextField, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import { CancelButton, SaveButton } from 'ui-component/button'

const CreateChromebook = ({ useFetchInit }) => {
  const { FetchCarritosChromebook, FetchEstadosChromebook, handleInputChange, onClose, Actions } = useFetchInit

  const { armarios, loadingArmarios } = FetchCarritosChromebook
  const { estadoChromebook } = FetchEstadosChromebook
  const { createChromebook } = Actions

  const [id_Carrito, setId_Carrito] = useState('')
  const [id_Estado_Chromebook, setId_Estado_Chromebook] = useState('')

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
      <form onSubmit={createChromebook}>
        <Grid container direction='row' spacing={1} sx={{ pt: '16px !important' }}>
          <Grid item>
            <TextField label='Chromebook #' name='numero_chromebook' type='number' onChange={handleInputChange} required />
          </Grid>
          <Grid item>
            <TextField label='Prod ID' name='prodid' type='text' onChange={handleInputChange} required />
          </Grid>

          <Grid item>
            <TextField label='SN' name='sn' type='text' onChange={handleInputChange} required />
          </Grid>
        </Grid>

        <Grid container direction='column' spacing={1} sx={{ pt: '16px !important' }}>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel required>Armario Chromebook</InputLabel>
              <Select value={id_Carrito} label='Carrito de Chromebook' onChange={handleChangeCupboard} name='id_armario' required>
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
              <InputLabel required>Estado de la Chromebook</InputLabel>
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

        <Grid container alignContent='center' justifyContent='space-between' sx={{ pt: '16px !important' }}>
          <Grid item>
            <CancelButton disabled={loadingArmarios} title='Cancelar' onClick={onClose} />
          </Grid>
          <Grid item>
            <SaveButton disabled={loadingArmarios} title='Guardar' />
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default CreateChromebook
