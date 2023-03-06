import { ModalBody, ModalFooter } from 'reactstrap'
import { Table } from 'reactstrap'

const Demerits = ({ useFetchInit }) => {
  const { toggle, FetchDemerits, selectedDemerits, handleDemeritSelection, scoreToDeduct, Actions } = useFetchInit
  const { demerits } = FetchDemerits

  const { loadingOperation, addDemerits } = Actions

  return (
    <form onSubmit={addDemerits}>
      <ModalBody>
        <h4>Seleccione los deméritos a descontar</h4>

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
        {/* <button type='button' onClick={() => console.log('Puntos a restar: ', scoreToDeduct)}>
          MMMS
        </button> */}
      </ModalBody>
      <ModalFooter>
        <div className='col-12'>
          <button disabled={loadingOperation} type='submit' className='rightButtonAccept'>
            Demeritar
          </button>
          <button disabled={loadingOperation} className='leftButtonCancel' type='button' onClick={toggle}>
            Cancelar
          </button>
        </div>
      </ModalFooter>
    </form>
  )
}

export default Demerits
