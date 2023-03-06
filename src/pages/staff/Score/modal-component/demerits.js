import { ModalBody, ModalFooter } from 'reactstrap'

const Demerits = ({ useFetchInit }) => {
  const { dataModal, toggle, FetchDemerits } = useFetchInit
  const { username, score } = dataModal.params
  const { demerits } = FetchDemerits

  return (
    <>
      <ModalBody>
        <div>
          <h3 style={{ color: '#409DC4' }}>{username}</h3>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className='col-12'>
          <button type='submit' className='rightButtonAccept'>
            Demeritar
          </button>
          <button className='leftButtonCancel' type='button' onClick={toggle}>
            Cancelar
          </button>
        </div>
      </ModalFooter>
    </>
  )
}

export default Demerits
