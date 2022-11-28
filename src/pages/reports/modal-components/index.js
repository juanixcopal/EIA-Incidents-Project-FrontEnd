import React from 'react'
import { Modal, ModalHeader } from 'reactstrap'
import '../../../styles/modal/modal.css'
import CreateIncidence from './create-incidence'
const MainModal = ({ useFetchInit }) => {
    const { dataModal, toggle } = useFetchInit
    const { open, title, component } = dataModal

    return (
        <>
            <Modal isOpen={open} toggle={toggle} centered={true} size='lg' className='modal-body'>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                {component === 'create-incidence' && <CreateIncidence useFetchInit={useFetchInit} />}
            </Modal>
        </>
    )
}

export default MainModal
