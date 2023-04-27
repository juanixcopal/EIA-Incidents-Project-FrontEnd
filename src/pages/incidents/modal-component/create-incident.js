import React from 'react'
import { ModalBody, ModalFooter, Button } from 'reactstrap'

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
          <Button disabled={loadingOperation} type='submit' style={{ float: 'right' }} color='success'>
            Crear
          </Button>
          <Button disabled={loadingOperation} type='button' style={{ float: 'left' }} onClick={toggle} color='danger'>
            Cancelar
          </Button>
        </div>
      </ModalFooter>
    </form>
  )
}

export default CreateIncidence
