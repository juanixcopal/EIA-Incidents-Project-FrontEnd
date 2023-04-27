import { Container, Card, CardHeader, CardBody, Row, Table, Button } from 'reactstrap'
import { useFetchTickets } from '../../../hooks/tickets/index'
import { AuthContext } from '../../../provider/global.provider'
import Header from '../../../components/header/Header'
import GradingIcon from '@mui/icons-material/Grading'
import '../../../styles/tickets/index.css'
import MainModal from './modal-component'
import { Pie } from 'react-chartjs-2'
import { useContext } from 'react'

const Tickets = () => {
  const { authData, verItemTermometro, verTablaMesActual, verTablaPrimerSemestre, verTablaSegundoSemestre, verGrafica } = useContext(AuthContext)
  const rol = authData.rol_usuario

  const mainHook = useFetchTickets()
  const {
    FetchClosedTicketsCurrentMonth,
    FetchClosedTicketsFirstSemester,
    FetchClosedTicketsSecondSemester,
    FetchOpenTickets,
    FetchTypeIncidencesClosed,
    toggle
  } = mainHook

  const { closedMonth } = FetchClosedTicketsCurrentMonth
  const { closedFirstSemester } = FetchClosedTicketsFirstSemester
  const { closedSecondSemester } = FetchClosedTicketsSecondSemester
  const { totalTickets } = FetchOpenTickets
  const { typeIncidencesClosed } = FetchTypeIncidencesClosed

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

  const pieChartData = {
    labels: Object.keys(typeIncidencesClosed),
    datasets: [
      {
        data: Object.values(typeIncidencesClosed),
        backgroundColor: [
          '#A2DED0',
          '#36A2EB',
          '#FFCE56',
          '#DAB7F8',
          '#D8F8B7',
          '#C9CBCF',
          '#DBAFAB',
          '#3B3E6F',
          '#EECBAD',
          '#708D81',
          '#FF6384',
          '#F8DDB7',
          '#bb73Fa'
        ]
      }
    ]
  }

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
                  <GradingIcon /> Administrar Vista
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
                  <h3 className='mb-0'>Termometro Tickets Abiertos</h3>
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
          ) : (
            <></>
          )}

          {verTablaPrimerSemestre === 1 ? (
            <div className='col-xl-4 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
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
            </div>
          ) : (
            <></>
          )}

          {verTablaSegundoSemestre === 1 ? (
            <div className='col-xl-4 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
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
          ) : (
            <></>
          )}

          {verGrafica === 1 ? (
            <div className='col-xl-8 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
              <Card className='shadow'>
                <CardHeader>
                  <h3 className='mb-0'>Estadísticas de incidencias</h3>
                </CardHeader>
                <CardBody>
                  <Pie data={pieChartData} />
                </CardBody>
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
