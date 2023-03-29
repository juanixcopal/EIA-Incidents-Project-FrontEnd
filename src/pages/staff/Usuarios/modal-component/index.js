import { Modal, ModalHeader } from 'reactstrap'
import ModifyUser from './modify-user'

const MainModal = ({ useFetchInit }) => {
  const { dataModal, toggle } = useFetchInit
  const { open, title, component } = dataModal

  return (
    <>
      <Modal isOpen={open} toggle={toggle} centered={true} size='lg' className='modal-body'>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        {component === 'modify-user' && <ModifyUser useFetchInit={useFetchInit} />}
      </Modal>
    </>
  )
}

export default MainModal
