import { useContext } from 'react'
import { Container, Card, CardHeader, CardBody, Row, Table, Button } from 'reactstrap'
import GradingIcon from '@mui/icons-material/Grading'

import { useFetchTickets } from '../../../hooks/tickets/index'
import { AuthContext } from '../../../provider/global.provider'
import Header from '../../../components/header/Header'
import MainModal from './modal-component'

import '../../../styles/tickets/index.css'

const Tickets = () => {
  const { authData, verItemTermometro, verTablaMesActual, verTablaPrimerSemestre, verTablaSegundoSemestre, verTablaSemanal } = useContext(AuthContext)
  const rol = authData.rol_usuario

  const mainHook = useFetchTickets()

  const {
    FetchClosedTicketsCurrentMonth,
    FetchClosedTicketsFirstSemester,
    FetchClosedTicketsSecondSemester,
    FetchOpenTickets,
    toggle,
    FetchClosedTicketsByWeek
  } = mainHook

  const { closedMonth } = FetchClosedTicketsCurrentMonth
  const { closedFirstSemester } = FetchClosedTicketsFirstSemester
  const { closedSecondSemester } = FetchClosedTicketsSecondSemester
  const { totalTickets } = FetchOpenTickets
  const { closedWeek } = FetchClosedTicketsByWeek

  const mercuryHeight = () => {
    if (totalTickets === 0) {
      return Math.min(10 * 10, 100)
    } else if (totalTickets === 1) {
      return Math.min(11 * 2, 100)
    } else if (totalTickets === 2) {
      return Math.min(12.5 * 2, 100)
    } else {
      return Math.min(totalTickets * 10, 100)
    }
  }

  const newOpenTickets = mercuryHeight()

  const getTicketsColor = () => {
    if (totalTickets === 0) {
      return `hsl(${0}, 0%, 90%)`
    } else {
      const hue = (1 - newOpenTickets / 100) * 120
      return `hsl(${hue}, 100%, 50%)`
    }
  }

  const fecha = new Date()
  const mesActual = fecha.toLocaleString('default', { month: 'long' }).replace(/^\w/, c => c.toUpperCase())

  return (
    <>
      <Header />
      <MainModal useFetchInit={mainHook} />
      <Container className='mt--8' fluid>
        <Row>
          <div className='col-xl-12 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
            {rol === 'superadmin' ? (
              <div>
                <Button onClick={() => toggle(null, 'Modificar Vista', 'modify-item-view')}>
                  <GradingIcon /> Administrar vista
                </Button>
              </div>
            ) : (
              <></>
            )}
          </div>

          {verItemTermometro === 1 ? (
            <div className='col-xl-4 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
              <Card className='shadow'>
                <CardHeader>
                  <h3 className='mb-0'>Termometro tickets abiertos</h3>
                </CardHeader>
                <CardBody>
                  <div className='App'>
                    <div className='thermometer' id='thermometer' href='#'>
                      <div className='mercury' style={{ height: `${newOpenTickets}%`, backgroundColor: getTicketsColor() }}></div>
                      <div className='thermometerBase' style={{ backgroundColor: getTicketsColor() }}></div>
                    </div>
                    <p>Tickets abiertos: {totalTickets}</p>
                  </div>
                </CardBody>
              </Card>
            </div>
          ) : (
            <></>
          )}

          {verTablaMesActual === 1 ? (
            <div className='col-xl-4 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
              <Card className='shadow'>
                <CardHeader>
                  <h3 className='mb-0'>Tickets cerrados del mes: {mesActual}</h3>
                </CardHeader>
                <Table className='align-items-center table-flush' responsive>
                  <thead className='thead-light'>
                    <tr>
                      <th scope='col'>Agente</th>
                      <th scope='col'>Tickets cerrados</th>
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
                          <td>{mes_actual} Tickets cerrados</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Card>
            </div>
          ) : (
            <></>
          )}

          {verTablaSemanal === 1 ? (
            <div className='col-xl-4 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
              <Card className='shadow'>
                <CardHeader>
                  <h3 className='mb-0'>Tickets cerrados semana actual</h3>
                </CardHeader>
                <Table className='align-items-center table-flush' responsive>
                  <thead className='thead-light'>
                    <tr>
                      <th scope='col'>Agente</th>
                      <th scope='col'>Tickets cerrados</th>
                      {/* <th scope='col'>Acciones</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {closedWeek.map(item => {
                      const { firstname, lastname, semana_actual, staff_id } = item

                      return (
                        <tr
                          key={staff_id}
                          onClick={() => toggle(null, 'Tickets Cerrados por el usuario', 'view-closed-ticket-by-staff', item)}
                          className='ticket-by-staff'
                          style={{ cursor: 'pointer' }}
                        >
                          <th scope='row'>
                            <span className='mb-0 text-sm'>
                              {firstname}
                              {lastname}
                            </span>
                          </th>
                          <td>{semana_actual} Tickets cerrados</td>
                          {/* <td>
                            <IconButton
                              color='primary'
                              aria-label='upload picture'
                              component='label'
                              onClick={() => toggle(null, 'Tickets Cerrados por el usuario', 'view-closed-ticket-by-staff', item)}
                            >
                              <PersonSearchIcon />
                            </IconButton>
                          </td> */}
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Card>
            </div>
          ) : (
            <></>
          )}

          {verTablaPrimerSemestre === 1 ? (
            <div className='col-xl-4 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
              <Card className='shadow'>
                <CardHeader>
                  <h3 className='mb-0'>Tickets cerrados primer semestre</h3>
                </CardHeader>
                <Table className='align-items-center table-flush' responsive>
                  <thead className='thead-light'>
                    <tr>
                      <th scope='col'>Agente</th>
                      <th scope='col'>Tickets cerrados</th>
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
                          <td>{primer_cuatri} Tickets cerrados</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Card>
            </div>
          ) : (
            <></>
          )}

          {verTablaSegundoSemestre === 1 ? (
            <div className='col-xl-4 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
              <Card className='shadow'>
                <CardHeader>
                  <h3 className='mb-0'>Tickets cerrados segundo semestre</h3>
                </CardHeader>
                <Table className='align-items-center table-flush' responsive>
                  <thead className='thead-light'>
                    <tr>
                      <th scope='col'>Agente</th>
                      <th scope='col'>Tickets cerrados</th>
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
                          <td>{segundo_cuatri} Tickets cerrados</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Card>
            </div>
          ) : (
            <></>
          )}
        </Row>
      </Container>
    </>
  )
}

export default Tickets
