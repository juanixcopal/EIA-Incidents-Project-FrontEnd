import { Modal, ModalHeader } from 'reactstrap'
import CreateChromebook from './create-chromebook'
import ViewChromebooks from './view-chromebooks'

const MainModal = ({ useFetchInit }) => {
  const { dataModal, toggle } = useFetchInit
  const { open, title, component } = dataModal

  return (
    <>
      <Modal isOpen={open} toggle={toggle} centered={true} size='lg' className='modal-body'>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        {component === 'create-chromebook' && <CreateChromebook useFetchInit={useFetchInit} />}
        {component === 'view-chromebook' && <ViewChromebooks useFetchInit={useFetchInit} />}
      </Modal>
    </>
  )
}

export default MainModal
