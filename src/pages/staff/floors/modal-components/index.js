import React from 'react'
import { Modal, ModalHeader } from 'reactstrap'
import '../../../../styles/modal/modal.css'
import UpdateIncidences from './update-incidence'
const MainModal = ({ useFetchInit }) => {
    const { dataModal, toggle } = useFetchInit
    const { open, title, component } = dataModal
    return (
        <>
            <Modal isOpen={open} toggle={toggle} centered={true} size='lg' className='modal-body'>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                {component === 'update-incidence' && <UpdateIncidences useFetchInit={useFetchInit} />}
            </Modal>
        </>
    )
}

export default MainModal
