import React from 'react'
import Demerits from './demerits'
import Merits from './merits'
import { Modal, ModalHeader } from 'reactstrap'

const MainModal = ({ useFetchInit }) => {
  const { dataModal, toggle } = useFetchInit
  const { open, title, component } = dataModal
  return (
    <>
      <Modal isOpen={open} toggle={toggle} centered={true} size='lg' className='modal-body'>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        {component === 'demerits' && <Demerits useFetchInit={useFetchInit} />}
        {component === 'merits' && <Merits useFetchInit={useFetchInit} />}
      </Modal>
    </>
  )
}

export default MainModal
