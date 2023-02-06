import React from 'react'
import { ModalBody, ModalFooter } from 'reactstrap'
// import { useFetchInitIncidents } from '../../../hooks/incidents/index'

const CreateIncidence = ({ useFetchInit }) => {
  const { dataIncident, toggle, handleInputChangeIncident, Actions, FetchIncidencesForFloor } = useFetchInit

  const { indicendesForFloor, loadingIncidencesForFloor } = FetchIncidencesForFloor
  const { loadingOperation, createIncidence } = Actions
  const { titulo, descripcion } = dataIncident

  const { dataModal } = useFetchInit
  const { tipo_aula, aula } = dataModal.params

  // const { FetchReportsData } = useFetchInitIncidents()
  // const { dataReports } = FetchReportsData

  console.log('INCIDENCES FOR FLOOR ', indicendesForFloor, loadingIncidencesForFloor)
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

      <div className='col-12'>
        {indicendesForFloor.map(item => {
          const { descripcion, id_estado_incidencia, titulo } = item
          return (
            <div key={id_estado_incidencia}>
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
      </div>
      {/* <div className='Prueba'> */}
      {/* {dataReports.length} */}
      {/* <div className={`DataReports-Content ${dataReports.length < 1 && 'hidden'}`}>
        {dataReports
          .filter(e => e.id_aula === id_aula && e.id_estado_incidencia === 1)
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
      </div> */}
      {/* </div> */}

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
