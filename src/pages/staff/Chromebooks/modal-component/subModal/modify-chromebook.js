import { ModalBody, ModalFooter, Button } from 'reactstrap'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useState } from 'react'
const ModifyChromebook = ({ useFetchInit }) => {
  const { dataSubModal, subToggle, handleInputChangeModify, FetchCarritosChromebook, FetchEstadosChromebook } = useFetchInit
  const { id_estado_chromebook, numero_chromebook, prodid, sn, armario } = dataSubModal.subParams
  const { estadoChromebook } = FetchEstadosChromebook
  const { carritos } = FetchCarritosChromebook

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
      <ModalBody>
        <div>
          <div className='form-group'>
            <label>Numero de Chromebook</label>
            <input className='input-group form-control' name='numero_chromebook' defaultValue={numero_chromebook} disabled />
          </div>
          <div className='form-group'>
            <label>Prod ID</label>
            <input className='input-group form-control' name='prodid' defaultValue={prodid} disabled />
          </div>
          <div className='form-group'>
            <label>SN</label>
            <input className='input-group form-control' name='sn' defaultValue={sn} disabled />
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

          {/* {id_Estado_Chromebook === 2 ? (
            <>
              <hr />
              <div className='form-group'>
                <label>Comentario</label>
                <input className='input-group form-control' type='text' name='comentario' onChange={handleInputChangeModify} required />
              </div>
            </>
          ) : (
            <></>
          )} */}
        </div>
      </ModalBody>
      <ModalFooter>
        <div className='col-12'>
          <Button disabled={true} type='submit' style={{ float: 'right' }} color='success'>
            Guardar
          </Button>
          <Button disabled={false} type='button' style={{ float: 'left' }} onClick={subToggle} color='danger'>
            Cancelar
          </Button>
        </div>
      </ModalFooter>
    </>
  )
}

export default ModifyChromebook
