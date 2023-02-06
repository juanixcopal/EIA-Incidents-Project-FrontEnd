import React, { useState } from 'react'
import { ModalBody, ModalFooter } from 'reactstrap'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const ResolveIncidence = ({ useFetchInit }) => {
  const { dataModal, Actions, toggle, FetchStates } = useFetchInit
  const { tipo_aula, aula } = dataModal.params
  const { loadingOperation, createIncidence } = Actions

  const { state, loadingState } = FetchStates

  const [hola, setState] = useState('')
  const handleChange = event => {
    setState(event.target.value)
  }
  return (
    <form>
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
              <Select labelId='demo-simple-select-label' id='demo-simple-select' value={hola} label='Estado' onChange={handleChange}>
                {state.map(item => {
                  const { id_estado_incidencia, estado } = item
                  return (
                    <div key={id_estado_incidencia}>
                      <MenuItem value={id_estado_incidencia}>{estado}</MenuItem>
                    </div>
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
