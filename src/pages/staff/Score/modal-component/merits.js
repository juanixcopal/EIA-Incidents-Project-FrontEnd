import { ModalBody, ModalFooter, Table, Button } from 'reactstrap'

const Merits = ({ useFetchInit }) => {
  const { toggle, FetchMerits, selectedMerits, handleMeritSelection, scoreToAdd, dataModal, Actions } = useFetchInit
  const { merits } = FetchMerits
  const { loadingOperation, addMerits } = Actions
  const { username } = dataModal.params

  return (
    <form onSubmit={addMerits}>
      <ModalBody>
        <h4>Seleccione los méritos que deseas sumar</h4>
        <h5>
          Puntos a meritar a {username}: {scoreToAdd}
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
            {merits.map(item => {
              const { id_merits, merits, score, comment } = item

              return (
                <tr key={id_merits}>
                  <th scope='row'>
                    <label>
                      <input type='checkbox' checked={selectedMerits.includes(item)} onChange={() => handleMeritSelection(item)} />
                    </label>
                  </th>
                  <td>{merits}</td>
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
            Meritar
          </Button>
          <Button disabled={loadingOperation} style={{ float: 'left' }} onClick={toggle} color='danger'>
            Cancelar
          </Button>
        </div>
      </ModalFooter>
    </form>
  )
}

export default Merits
