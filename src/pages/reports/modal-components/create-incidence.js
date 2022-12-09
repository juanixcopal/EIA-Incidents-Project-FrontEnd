import React from 'react'
import { ModalBody, ModalFooter } from 'reactstrap'

const CreateIncidence = ({ useFetchInit }) => {
    const { data, toggle, handleInputChange, Actions, dataModal, FetchDataReports } = useFetchInit
    const { loadingOperation, createIncidence } = Actions
    const { params } = dataModal
    const { tipo_aula, aula } = params
    const { titulo, descripcion } = data
    const { reportsData } = FetchDataReports
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
                        <label>Titulo</label>
                        <input className='input-group form-control' type='text' name='titulo' value={titulo} onChange={handleInputChange} required />
                    </div>
                    <div className='form-group'>
                        <label>Descripcion</label>
                        <input className='input-group form-control' type='text' name='descripcion' value={descripcion} onChange={handleInputChange} required />
                    </div>
                </div>
            </ModalBody>
            <hr />
            <ModalBody>
                {reportsData.map(item => {
                    const { titulo, descripcion, id_reporte } = item
                    return (
                        <div key={id_reporte}>
                            <div>
                                Titulo
                                <p>{titulo}</p>
                            </div>
                            <div>
                                Descripcion
                                <p>{descripcion}</p>
                            </div>
                        </div>
                    )
                })}
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
