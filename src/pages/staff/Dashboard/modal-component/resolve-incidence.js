import React, { useState } from 'react'
import { ModalBody, ModalFooter } from 'reactstrap'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const ResolveIncidence = ({ useFetchInit }) => {
  const { dataModal, Actions, toggle, FetchStates } = useFetchInit
  const { tipo_aula, aula, id_reporte, comentario, id_estado_incidencia } = dataModal.params

  const { loadingOperation } = Actions

  const { state } = FetchStates

  const [id_estado, setId_Estado] = useState('')

  const handleChange = async e => {
    setId_Estado(e.target.value)
    // console.log('Value', event.target.value)
    // console.log(e.target)
  }

  const prueba = async e => {
    e.preventDefault()
    console.log('Id_Estado', id_estado)
  }

  return (
    <form onSubmit={prueba}>
      <ModalBody>
        <div>
          <div>
            <h3 style={{ color: '#409DC4' }}>
              {tipo_aula} {aula}
            </h3>
          </div>
          <div className='form-group'>
            <label>Comentario</label>
            <input className='input-group form-control' type='text' required />
          </div>
          <div className='form-group'>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Estado</InputLabel>
              <Select labelId='demo-simple-select-label' id='demo-simple-select' value={id_estado} label='Estado' onChange={handleChange} required>
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
