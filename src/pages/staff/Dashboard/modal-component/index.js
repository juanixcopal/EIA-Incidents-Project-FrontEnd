import React from 'react'
import { Modal, ModalHeader } from 'reactstrap'
import ResolveIncidence from './resolve-incidence'
import '../../../../styles/modal/index.css'

const MainModal = ({ useFetchInit }) => {
  const { dataModal, toggle } = useFetchInit
  const { open, title, component } = dataModal

  return (
    <>
      <Modal isOpen={open} toggle={toggle} centered={true} size='lg' className='modal-body'>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        {component === 'resolve-incidence' && <ResolveIncidence useFetchInit={useFetchInit} />}
      </Modal>
    </>
  )
}

export default MainModal
