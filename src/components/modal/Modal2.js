import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Modal2 = props => {
    return (
        <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.content}</Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className='btn-danger'>
                    Cancelar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Modal2
