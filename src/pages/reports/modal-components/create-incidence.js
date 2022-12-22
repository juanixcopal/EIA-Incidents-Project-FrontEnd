import React from 'react'
import { ModalBody, ModalFooter } from 'reactstrap'
import { useFetchInitReports } from 'hooks/reports/index'

const CreateIncidence = ({ useFetchInit }) => {
  const { data, toggle, handleInputChange, Actions } = useFetchInit

  const { loadingOperation, createIncidence } = Actions
  const { titulo, descripcion } = data

  const { dataModal } = useFetchInit
  const { id_aula, tipo_aula, aula } = dataModal.params

  const { FetchReportsData } = useFetchInitReports()
  const { dataReports } = FetchReportsData

  return (
    <form onSubmit={createIncidence}>
      <ModalBody>
        <div>
          <div>
            <h6 style={{ color: '#409DC4' }}>
              {tipo_aula} {aula}
            </h6>
          </div>
          <div className='form-group'>
            <label>Título</label>
            {/* <input className='input-group form-control' type='text' name='titulo' value={titulo} onChange={handleInputChange} required /> */}
            <input className='input-group form-control' defaultValue={titulo} disabled />
          </div>
          <div className='form-group'>
            <label>Descripción</label>
            <input className='input-group form-control' type='text' name='descripcion' value={descripcion} onChange={handleInputChange} required />
          </div>
        </div>
      </ModalBody>

      {dataReports
        .filter(e => e.id_aula === id_aula)
        .map(item => {
          const { titulo, descripcion, id_reporte } = item
          return (
            <div key={id_reporte}>
              <hr />
              <div
                className='md-12 row '
                style={{
                  borderStyle: 'dotted',
                  borderWidth: '2px',
                  borderRadius: '20px',
                  margin: '10px',
                  borderColor: '#a7a7a7',
                  padding: '5px'
                }}
              >
                <div className='md-6' style={{ display: 'flex', color: '#a7a7a7' }}>
                  <h6>Reporte: </h6>
                  <p>{titulo}</p>
                </div>
                <div className='md-6' style={{ display: 'flex', color: '#a7a7a7' }}>
                  <h6>Descripción: </h6>
                  <p>{descripcion}</p>
                </div>
              </div>
            </div>
          )
        })}

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
