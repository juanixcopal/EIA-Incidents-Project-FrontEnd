import React from 'react'
import { ModalBody, ModalFooter } from 'reactstrap'

const CreateIncidence = ({ useFetchInit }) => {
    const { data, toggle, handleInputChange, Actions, dataModal, FetchDataReports } = useFetchInit
    const { loadingOperation, createIncidence } = Actions
    const { params } = dataModal
    const { tipo_aula, aula, id_aula } = params
    const { titulo, descripcion } = data
    const { reportsData } = FetchDataReports
    // console.log(params)
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

            {reportsData
                .filter(e => e.id_aula === id_aula)
                .map(item => {
                    const { titulo, descripcion, id_aula } = item
                    return (
                        <div key={id_aula}>
                            <hr />
                            <h6 style={{ color: '#C9C9C9', paddingLeft: '15px' }}>Incidencia Creada</h6>
                            <ModalBody style={{ borderStyle: 'solid', borderWidth: '1px', borderRadius: '20px', margin: '10px', borderColor: '#a7a7a7' }}>
                                <div className='form-group'>
                                    <label>Titulo:</label>
                                    <input className='input-group form-control' defaultValue={titulo} disabled />
                                </div>
                                <div className='form-group'>
                                    <label>Descripcion:</label>
                                    <input className='input-group form-control' defaultValue={descripcion} disabled />
                                </div>
                            </ModalBody>
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
