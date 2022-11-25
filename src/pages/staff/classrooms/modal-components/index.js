import React from 'react'
import { Modal, ModalHeader } from 'reactstrap'
import CreateClassrooms from './create-classrooms'

const MainModal = ({ useFetchInit }) => {
    const { dataModal, toggle } = useFetchInit
    const { open, title, component } = dataModal

    return (
        <>
            <Modal isOpen={open} toggle={toggle} className='modal-body' centered={true} size='lg'>
                <ModalHeader toggle={toggle} closeButton>
                    {title}
                </ModalHeader>
                {component === 'create-classroom' && <CreateClassrooms useFetchInit={useFetchInit} />}
            </Modal>
        </>
    )
}

export default MainModal
