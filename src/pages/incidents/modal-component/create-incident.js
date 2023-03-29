import React from 'react'
import { ModalBody, ModalFooter } from 'reactstrap'

const CreateIncidence = ({ useFetchInit }) => {
  const { dataIncident, toggle, handleInputChangeIncident, Actions, dataModal } = useFetchInit

  const { loadingOperation, createIncidence } = Actions
  const { titulo, descripcion } = dataIncident

  const { tipo_aula, aula } = dataModal.params

  return (
    <form onSubmit={createIncidence}>
      <ModalBody>
        <div>
          <div>
            <h3 style={{ color: '#409DC4' }}>
              {tipo_aula} {aula}
            </h3>
          </div>
          <div className='form-group'>
            <label>Título</label>
            <input className='input-group form-control' type='text' name='titulo' value={titulo} onChange={handleInputChangeIncident} required />
          </div>
          <div className='form-group'>
            <label>Descripción</label>
            <input className='input-group form-control' type='text' name='descripcion' value={descripcion} onChange={handleInputChangeIncident} required />
          </div>
        </div>
      </ModalBody>

      <ModalFooter>
        <div className='col-12'>
          <button disabled={loadingOperation} type='submit' className='rightButtonAccept'>
            Crear
          </button>
          <button disabled={loadingOperation} className='leftButtonCancel' type='button' onClick={toggle}>
            Cancelar
          </button>
        </div>
      </ModalFooter>
    </form>
  )
}

export default CreateIncidence
