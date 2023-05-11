import { Modal, ModalHeader } from 'reactstrap'
import ViewClosedTicketByStaff from './view-closed-ticket-by-staff'
import ModifyItemViewEstadisticas from './modify-item-view-estadisticas'

const MainModal = ({ useFetchInit }) => {
  const { dataModal, toggle } = useFetchInit
  const { open, title, component } = dataModal

  return (
    <>
      <Modal isOpen={open} toggle={toggle} centered={true} size='lg' className='modal-body'>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        {component === 'modify-item-view-page-estadisticas' && <ModifyItemViewEstadisticas useFetchInit={useFetchInit} />}
        {component === 'view-closed-ticket-by-staff' && <ViewClosedTicketByStaff useFetchInit={useFetchInit} />}
      </Modal>
    </>
  )
}

export default MainModal
