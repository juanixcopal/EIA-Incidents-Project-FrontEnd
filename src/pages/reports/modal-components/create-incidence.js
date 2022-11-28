import React from 'react'
import { ModalBody, ModalFooter } from 'reactstrap'

const CreateIncidence = ({ useFetchInit }) => {
    const { FetchDataReports, data, toggle, handleInputChange, Actions, dataModal } = useFetchInit
    const { loadingOperation, createIncidence } = Actions
    const { reportsData, loadingReportsData } = FetchDataReports

    const { titulo, descripcion } = data
    return (
        <form onSubmit={createIncidence}>
            <ModalBody>
                <div className='incident-formt mt-3 mb-5'>
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
