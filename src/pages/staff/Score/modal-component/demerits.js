import { ModalBody, ModalFooter, Table, Button } from 'reactstrap'

const Demerits = ({ useFetchInit }) => {
  const { toggle, FetchDemerits, selectedDemerits, handleDemeritSelection, scoreToDeduct, Actions, dataModal } = useFetchInit
  const { demerits } = FetchDemerits

  const { loadingOperation, addDemerits } = Actions
  const { username } = dataModal.params

  return (
    <form onSubmit={addDemerits}>
      <ModalBody>
        <h4>Seleccione los deméritos a descontar</h4>
        <h5>
          Puntos a demeritar a {username}: {scoreToDeduct}
        </h5>
        <Table className='align-items-center table-flush' responsive>
          <thead className='thead-light'>
            <tr>
              <th scope='col'></th>
              <th scope='col'>Mérito</th>
              <th scope='col'>Puntaje</th>
              <th scope='col'>Comentario</th>
            </tr>
          </thead>
          <tbody>
            {demerits.map(item => {
              const { id_demerits, demerits, score, comment } = item

              return (
                <tr key={id_demerits}>
                  <th scope='row'>
                    <label>
                      <input type='checkbox' checked={selectedDemerits.includes(item)} onChange={() => handleDemeritSelection(item)} />
                    </label>
                  </th>
                  <td>{demerits}</td>
                  <td>{score} puntos </td>
                  <td>{comment}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </ModalBody>
      <ModalFooter>
        <div className='col-12'>
          <Button disabled={loadingOperation} type='submit' style={{ float: 'right' }} color='success'>
            Demeritar
          </Button>
          <Button disabled={loadingOperation} type='button' style={{ float: 'left' }} onClick={toggle} color='danger'>
            Cancelar
          </Button>
        </div>
      </ModalFooter>
    </form>
  )
}

export default Demerits
