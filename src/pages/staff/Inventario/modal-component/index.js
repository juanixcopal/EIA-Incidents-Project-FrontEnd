import React from 'react'
import { Modal, ModalHeader } from 'reactstrap'
import QrScann from './Qr-Scann'
import '../../../../styles/modal/index.css'

const MainModal = ({ data, tog }) => {
  const { open, title, component } = data

  return (
    <>
      <Modal isOpen={open} toggle={tog} centered={true} size='lg' className='modal-body'>
        <ModalHeader toggle={tog}>{title}</ModalHeader>
        {component === 'qr-scann' && <QrScann toggle={tog} />}
      </Modal>
    </>
  )
}

export default MainModal
