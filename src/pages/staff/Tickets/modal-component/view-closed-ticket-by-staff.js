import { ModalBody, ModalFooter, Table, Button } from 'reactstrap'

const ViewClosedTicketByStaff = ({ useFetchInit }) => {
  const { FetchDataTicketsByStaff } = useFetchInit
  const { dataTicketByStaff } = FetchDataTicketsByStaff

  return (
    <>
      <ModalBody>
        <Table className='align-items-center table-flush' responsive>
          <thead className='thead-light'>
            <tr>
              <th scope='col'>Tema de ayuda</th>
              <th scope='col'>Total de tickets</th>
            </tr>
          </thead>
          <tbody>
            {dataTicketByStaff.map(item => {
              const { ticket_id, help_topic, num_tickets } = item

              return (
                <tr key={ticket_id}>
                  <th scope='row'>{help_topic}</th>
                  <td>{num_tickets}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </ModalBody>
    </>
  )
}

export default ViewClosedTicketByStaff
