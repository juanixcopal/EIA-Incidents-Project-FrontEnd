import Header from '../../../components/header/Header'
import { useState } from 'react'
import { Container, Card, CardHeader, Row, CardBody, Table } from 'reactstrap'
import { useFetchTickets } from '../../../hooks/tickets/index'
import '../../../styles/tickets/index.css'

const Tickets = () => {
  const mainHook = useFetchTickets()
  const { FetchClosedTicketsCurrentMonth, FetchClosedTicketsFirstSemester, FetchClosedTicketsSecondSemester, FetchOpenTickets } = mainHook

  const { closedMonth } = FetchClosedTicketsCurrentMonth
  const { closedFirstSemester } = FetchClosedTicketsFirstSemester
  const { closedSecondSemester } = FetchClosedTicketsSecondSemester
  const { totalTickets } = FetchOpenTickets

  const newOpenTickets = Math.min(totalTickets * 10, 100)

  const getTicketsColor = () => {
    const hue = (1 - newOpenTickets / 100) * 120
    return `hsl(${hue}, 100%, 50%)`
  }

  return (
    <>
      <Header />
      <Container className='mt--8' fluid>
        <Row>
          <div className='col-7'>
            <Card className='shadow'>
              <CardHeader>
                <h3 className='mb-0'>Termometro Tickets Abiertos</h3>
              </CardHeader>
              <CardBody>
                <div className='App'>
                  <div className='thermometer'>
                    <div className='mercury' style={{ height: `${newOpenTickets}%`, backgroundColor: getTicketsColor() }}></div>
                  </div>
                  <p>Tickets abiertos: {totalTickets}</p>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className='col-5' style={{ paddingBottom: '25px' }}>
            <Card className='shadow'>
              <CardHeader>
                <h3 className='mb-0'>Tickets Cerrados Mes Actual</h3>
              </CardHeader>
              <Table className='align-items-center table-flush' responsive>
                <thead className='thead-light'>
                  <tr>
                    <th scope='col'>Agente</th>
                    <th scope='col'>Tickets Cerrados</th>
                  </tr>
                </thead>
                <tbody>
                  {closedMonth.map(item => {
                    const { firstname, lastname, mes_actual, staff_id } = item

                    return (
                      <tr key={staff_id}>
                        <th scope='row'>
                          <span className='mb-0 text-sm'>
                            {firstname}
                            {lastname}
                          </span>
                        </th>
                        <td>{mes_actual} Tickets Cerrados</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Card>
          </div>

          {/* <div className='col-6'>
            <Card className='shadow'>
              <CardHeader>
                <h3 className='mb-0'>Tickets Cerrados Primer Semestre</h3>
              </CardHeader>
              <Table className='align-items-center table-flush' responsive>
                <thead className='thead-light'>
                  <tr>
                    <th scope='col'>Agente</th>
                    <th scope='col'>Tickets Cerrados</th>
                  </tr>
                </thead>
                <tbody>
                  {closedFirstSemester.map(item => {
                    const { firstname, lastname, primer_cuatri, staff_id } = item

                    return (
                      <tr key={staff_id}>
                        <th scope='row'>
                          <span className='mb-0 text-sm'>
                            {firstname}
                            {lastname}
                          </span>
                        </th>
                        <td>{primer_cuatri} Tickets Cerrados</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Card>
          </div> */}

          <div className='col-6' style={{ paddingBottom: '40px' }}>
            <Card className='shadow'>
              <CardHeader>
                <h3 className='mb-0'>Tickets Cerrados Segundo Semestre</h3>
              </CardHeader>
              <Table className='align-items-center table-flush' responsive>
                <thead className='thead-light'>
                  <tr>
                    <th scope='col'>Agente</th>
                    <th scope='col'>Tickets Cerrados</th>
                  </tr>
                </thead>
                <tbody>
                  {closedSecondSemester.map(item => {
                    const { firstname, lastname, segundo_cuatri, staff_id } = item

                    return (
                      <tr key={staff_id}>
                        <th scope='row'>
                          <span className='mb-0 text-sm'>
                            {firstname}
                            {lastname}
                          </span>
                        </th>
                        <td>{segundo_cuatri} Tickets Cerrados</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Tickets
