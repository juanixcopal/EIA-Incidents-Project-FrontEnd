import { Modal, ModalHeader } from 'reactstrap'
import ModifyChromebook from './modify-chromebook'

const SubMainModal = ({ useFetchInit }) => {
  const { dataSubModal, subToggle } = useFetchInit
  const { subOpen, subTitle, subComponent } = dataSubModal

  return (
    <>
      <Modal isOpen={subOpen} toggle={subToggle} centered={true} size='lg' className='modal-body'>
        <ModalHeader toggle={subToggle}>{subTitle}</ModalHeader>
        {subComponent === 'modify-chromebook' && <ModifyChromebook useFetchInit={useFetchInit} />}
      </Modal>
    </>
  )
}

export default SubMainModal
