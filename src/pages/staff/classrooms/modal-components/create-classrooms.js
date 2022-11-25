import React from 'react'
import Select from 'react-select'
import { ModalBody, ModalFooter } from 'reactstrap'

const CreateClassroom = ({ useFetchInit }) => {
    const { handleInputChange, toggle, data, FetchTypeClassrooms, FetchFlats, Actions } = useFetchInit
    const { loadingOperation, createClassroom } = Actions
    const { flats, loadingFlats } = FetchFlats
    const { typeClassrooms, loadingTypeClassrooms } = FetchTypeClassrooms

    const { aula, id_planta, id_tipo_aula } = data

    return (
        <form onSubmit={createClassroom}>
            <ModalBody>
                <div className='incident-form mt-3 mb-5'>
                    <div className='form-group'>
                        <label>No. Aula</label>
                        <input className='input-group form-control' type='text' name='aula' value={aula} onChange={handleInputChange} required />
                    </div>
                    <div className='form-group'>
                        <label>Tipo</label>
                        <Select
                            isDisabled={loadingTypeClassrooms}
                            options={typeClassrooms}
                            defaultValue={id_tipo_aula}
                            onChange={({ value }) => handleInputChange({ target: { name: 'id_tipo_aula', value } })}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Planta</label>
                        <Select
                            isDisabled={loadingFlats}
                            options={flats}
                            defaultValue={id_planta}
                            onChange={({ value }) => handleInputChange({ target: { name: 'id_planta', value } })}
                        />
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

export default CreateClassroom
