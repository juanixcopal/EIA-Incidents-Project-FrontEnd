import React, { useState } from 'react'
import { ModalBody, ModalFooter } from 'reactstrap'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const ResolveIncidence = ({ useFetchInit }) => {
  const { dataModal, Actions, toggle, FetchStates, handleInputChange } = useFetchInit
  const { loadingOperation, updateIncidence } = Actions
  const { tipo_aula, aula } = dataModal.params

  const { state } = FetchStates

  const [id_estado, setId_Estado] = useState('')

  const handleChange = e => {
    setId_Estado(e.target.value)
    handleInputChange(e)
  }

  return (
    <form onSubmit={updateIncidence}>
      <ModalBody>
        <div>
          <div>
            <h3 style={{ color: '#409DC4' }}>
              {tipo_aula} {aula}
            </h3>
          </div>
          <div className='form-group'>
            <label>Comentario</label>
            <input className='input-group form-control' type='text' name='comentario' onChange={handleInputChange} required />
          </div>
          <div className='form-group'>
            <FormControl fullWidth>
              <InputLabel>Estado</InputLabel>
              <Select value={id_estado} label='Estado' onChange={handleChange} name='id_estado_incidencia' required>
                {state.map(item => {
                  const { id_estado_incidencia, estado } = item
                  return (
                    <MenuItem key={id_estado_incidencia} value={id_estado_incidencia}>
                      {estado}
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
          <button disabled={loadingOperation} type='submit' className='rightButtonAccept'>
            Guardar
          </button>
          <button disabled={loadingOperation} type='button' className='leftButtonCancel' onClick={toggle}>
            Cancelar
          </button>
        </div>
      </ModalFooter>
    </form>
  )
}

export default ResolveIncidence

// const prueba = async e => {
//   setId_Estado(e.target.value)
// }
