import React from 'react'
import { ModalBody, ModalFooter } from 'reactstrap'

const UpdateIncidences = ({ useFetchInit }) => {
    const { FetchDataReports, dataModal } = useFetchInit
    const { reportsData } = FetchDataReports
    const { id_aula } = dataModal.params

    return (
        <>
            <ModalBody>
                {reportsData
                    .filter(e => e.id_aula === id_aula)
                    .map(item => {
                        const { aula, descripcion, titulo, estado, id_aula, tipo_aula } = item
                        return (
                            <div key={id_aula}>
                                <div>
                                    <h6 style={{ color: '#409DC4' }}>
                                        {tipo_aula} {aula}
                                    </h6>
                                </div>
                                <div className='form-group'>
                                    <label>Titulo</label>
                                    <input className='input-group form-control' defaultValue={titulo} disabled />
                                </div>
                                <div className='form-group'>
                                    <label>Descripcion</label>
                                    <input className='input-group form-control' defaultValue={descripcion} disabled />
                                </div>
                                <div className='form-group'>
                                    <label>Estado Incidencia</label>
                                    <input className='input-group form-control' defaultValue={estado} disabled />
                                </div>
                                <div>
                                    <label>Agente</label>
                                    <input className='input-group form-control' />
                                </div>
                            </div>
                        )
                    })}
            </ModalBody>
            <ModalFooter>
                <div className='col-12'>
                    <button className='rightButtonAccept'>Actualizar</button>
                    <button className='leftButtonCancel'>Cancelar</button>
                </div>
            </ModalFooter>
        </>
    )
}

export default UpdateIncidences
