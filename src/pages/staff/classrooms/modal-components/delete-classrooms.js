import React from 'react'
// import Select from 'react-select'
import { ModalBody, ModalFooter } from 'reactstrap'
import { AiFillWarning } from 'react-icons/ai'

const DeleteClassrooms = ({ useFetchInit }) => {
    const { toggle, Actions } = useFetchInit
    const { loadingOperation, createClassroom } = Actions

    return (
        <form onSubmit={createClassroom}>
            <ModalBody>
                <AiFillWarning style={{ height: '80px', color: 'red', alignContent: 'center' }} />
                <p style={{ textAlign: 'center' }}>¿Estás seguro que deseas eliminar esta clase?, Ya no se podrá ver en la lista de clases si lo eliminas</p>
            </ModalBody>
            <ModalFooter>
                <div className='col-12'>
                    <button disabled={loadingOperation} type='submit' className='rightButtonAccept'>
                        Eliminar
                    </button>
                    <button disabled={loadingOperation} className='leftButtonCancel' type='button' onClick={toggle}>
                        Cancelar
                    </button>
                </div>
            </ModalFooter>
        </form>
    )
}

export default DeleteClassrooms
