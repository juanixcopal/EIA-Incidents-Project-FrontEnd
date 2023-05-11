import { Modal, ModalHeader } from 'reactstrap'
import ModifyItemView from './modify-item-view'
import ViewClosedTicketByStaff from './view-closed-ticket-by-staff'

const MainModal = ({ useFetchInit }) => {
  const { dataModal, toggle } = useFetchInit
  const { open, title, component } = dataModal

  return (
    <>
      <Modal isOpen={open} toggle={toggle} centered={true} size='lg' className='modal-body'>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        {component === 'modify-item-view' && <ModifyItemView useFetchInit={useFetchInit} />}
        {component === 'view-closed-ticket-by-staff' && <ViewClosedTicketByStaff useFetchInit={useFetchInit} />}
      </Modal>
    </>
  )
}

export default MainModal
