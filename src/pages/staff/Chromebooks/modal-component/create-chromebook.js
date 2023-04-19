import { ModalBody, ModalFooter } from 'reactstrap'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useState } from 'react'

const CreateChromebook = ({ useFetchInit }) => {
  const { FetchCarritosChromebook, FetchEstadosChromebook, toggle, Actions, handleInputChange } = useFetchInit
  const { carritos, loadingCarritos } = FetchCarritosChromebook
  const { estadoChromebook } = FetchEstadosChromebook
  const { createChromebook } = Actions

  const [id_Carrito, setId_Carrito] = useState('')
  const [id_Estado_Chromebook, setId_Estado_Chromebook] = useState('')

  const handleChangeCarrito = e => {
    setId_Carrito(e.target.value)
    handleInputChange(e)
  }

  const handleChangeEstadoChromebook = e => {
    setId_Estado_Chromebook(e.target.value)
    handleInputChange(e)
  }

  return (
    <form onSubmit={createChromebook}>
      <ModalBody>
        <div>
          <div className='form-group'>
            <label>Numero de Chromebook</label>
            <input className='input-group form-control' type='number' name='numero_chromebook' onChange={handleInputChange} required />
          </div>
          <div className='form-group'>
            <label>Prod ID</label>
            <input className='input-group form-control' type='text' name='prodid' onChange={handleInputChange} required />
          </div>
          <div className='form-group'>
            <label>SN</label>
            <input className='input-group form-control' type='text' name='sn' onChange={handleInputChange} required />
          </div>
          <div className='form-group'>
            <FormControl fullWidth>
              <InputLabel>Armario de Chromebook</InputLabel>
              <Select value={id_Carrito} label='Carrito de Chromebook' onChange={handleChangeCarrito} name='id_carrito' required>
                {carritos.map(item => {
                  const { id_armario, numero_carrito } = item
                  return (
                    <MenuItem key={id_armario} value={id_armario}>
                      {numero_carrito}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </div>
          <div className='form-group'>
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
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className='col-12'>
          <button disabled={loadingCarritos} type='submit' className='rightButtonAccept'>
            Guardar
          </button>
          <button disabled={loadingCarritos} type='button' className='leftButtonCancel' onClick={toggle}>
            Cancelar
          </button>
        </div>
      </ModalFooter>
    </form>
  )
}

export default CreateChromebook
