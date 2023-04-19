import { ModalBody, ModalFooter } from 'reactstrap'
const ModifyItemView = ({ useFetchInit }) => {
  const { toggle } = useFetchInit
  return (
    <>
      <ModalBody>
        <div>
          <h2>Modificar Vista</h2>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className='col-12'>
          <button type='submit' className='rightButtonAccept'>
            Guardar
          </button>
          <button type='button' className='leftButtonCancel' onClick={toggle}>
            Cancelar
          </button>
        </div>
      </ModalFooter>
    </>
  )
}

export default ModifyItemView
