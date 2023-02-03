import React from 'react'
import { Modal, ModalHeader } from 'reactstrap'
import CreateIncidence from './create-incident'
import '../../../styles/modal/index.css'

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
