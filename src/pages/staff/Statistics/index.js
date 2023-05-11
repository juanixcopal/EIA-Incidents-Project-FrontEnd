import { Container, Row, Card, CardHeader, CardBody, Button, Table } from 'reactstrap'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { useFetchStatistics } from '../../../hooks/statistics/index'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { AuthContext } from '../../../provider/global.provider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Header from '../../../components/header/Header'
import GradingIcon from '@mui/icons-material/Grading'
import ReplayIcon from '@mui/icons-material/Replay'
import { Pie, Line } from 'react-chartjs-2'
import MainModal from './modal-component'
import { useContext, useState } from 'react'

const Statistics = () => {
  const mainHook = useFetchStatistics()

  const { authData, verPastelMesActual, verPastelRangoFecha, verLinealSemanal, verTablaTicketSemana } = useContext(AuthContext)

  const {
    FetchTypeIncidencesClosed,
    startDate,
    handleStartDateChange,
    handleEndDateChange,
    endDate,
    handleSubmit,
    FetchTypeIncidencesClosedByRangeDate,
    toggle,
    FetchClosedTicketsByWeek,
    handleWeekChange,
    FetchTypeIncidencesClosedWeek
  } = mainHook

  const rol = authData.rol_usuario

  const { typeIncidencesClosed } = FetchTypeIncidencesClosed
  const { typeIncidencesClosedByRangeDate } = FetchTypeIncidencesClosedByRangeDate
  const { closedWeek } = FetchClosedTicketsByWeek
  const { typeIncidencesClosedWeek } = FetchTypeIncidencesClosedWeek

  const fecha = new Date()
  const mesActual = fecha.toLocaleString('default', { month: 'long' }).replace(/^\w/, c => c.toUpperCase())

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
    ],
    options: {
      responsive: true
    }
  }

  const pieChartDataByRangeDate = {
    labels: Object.keys(typeIncidencesClosedByRangeDate),
    datasets: [
      {
        data: Object.values(typeIncidencesClosedByRangeDate),
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
          '#bb73Fa',
          '#FF7F50'
        ]
      }
    ],
    options: {
      responsive: true
    }
  }

  const LineChartData = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    datasets: [
      {
        label: 'Instalación de Software',
        data: typeIncidencesClosedWeek.map(item => item.Instalacion_Software),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Impresoras',
        data: typeIncidencesClosedWeek.map(item => item.Impresoras),
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'Puesto de Trabajo',
        data: typeIncidencesClosedWeek.map(item => item.Puesto_Trabajo),
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1
      },
      {
        label: 'Aulas',
        data: typeIncidencesClosedWeek.map(item => item.Aulas),
        fill: false,
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.1
      },
      {
        label: 'Residencia',
        data: typeIncidencesClosedWeek.map(item => item.Residencia),
        fill: false,
        borderColor: 'rgb(255, 159, 64)',
        tension: 0.1
      },
      {
        label: 'Desconocimiento',
        data: typeIncidencesClosedWeek.map(item => item.Desconocimiento),
        fill: false,
        borderColor: 'rgb(255, 205, 86)',
        tension: 0.1
      },
      {
        label: 'Chromebooks',
        data: typeIncidencesClosedWeek.map(item => item.Chromebooks),
        fill: false,
        borderColor: 'rgb(56, 202, 23)',
        tension: 0.1
      },
      {
        label: 'Laboratorios de Informática',
        data: typeIncidencesClosedWeek.map(item => item.Laboratorios_informatica),
        fill: false,
        borderColor: 'rgb(150, 150, 150)',
        tension: 0.1
      },
      {
        label: 'Soporte de Eventos',
        data: typeIncidencesClosedWeek.map(item => item.Soporte_eventos),
        fill: false,
        borderColor: 'rgb(125, 67, 145)',
        tension: 0.1
      },
      {
        label: 'Internet',
        data: typeIncidencesClosedWeek.map(item => item.Internet),
        fill: false,
        borderColor: 'rgb(12, 150, 200)',
        tension: 0.1
      },
      {
        label: 'Laboratorios de Ciencias',
        data: typeIncidencesClosedWeek.map(item => item.Laboratorios_ciencias),
        fill: false,
        borderColor: 'rgb(255, 0, 0)',
        tension: 0.1
      },
      {
        label: 'Servidores',
        data: typeIncidencesClosedWeek.map(item => item.Servidores),
        fill: false,
        borderColor: 'rgb(0, 255, 0)',
        tension: 0.1
      },
      {
        label: 'Formación',
        data: typeIncidencesClosedWeek.map(item => item.Formacion),
        fill: false,
        borderColor: 'rgb(255, 192, 203)',
        tension: 0.1
      },
      {
        label: 'Desarrollo',
        data: typeIncidencesClosedWeek.map(item => item.Desarrollo),
        fill: false,
        borderColor: 'rgb(240, 128, 128)',
        tension: 0.1
      }
    ]
  }

  const options = {
    responsive: true,
    title: {
      display: true,
      text: 'Temas de ayuda cerrados de la semana'
    }
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
                <Button onClick={() => toggle(null, 'Modificar Vista Estadísticas', 'modify-item-view-page-estadisticas')}>
                  <GradingIcon /> Administrar vista
                </Button>
              </div>
            ) : (
              <></>
            )}
          </div>

          {verPastelMesActual === 1 ? (
            <div className='col-xl-6 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
              <Card className='shadow'>
                <CardHeader>
                  <h3 className='mb-0'>Estadísticas de incidencias del mes: {mesActual}</h3>
                </CardHeader>
                <CardBody>
                  <Pie data={pieChartData} />
                </CardBody>
              </Card>
            </div>
          ) : (
            <></>
          )}

          {verPastelRangoFecha === 1 ? (
            <div className='col-xl-7 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
              <Card className='shadow'>
                <CardHeader>
                  <h3 className='mb-0'>Estadísticas de incidencias por fecha</h3>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Row>
                      <div style={{ paddingRight: '10px' }}>
                        <DatePicker value={startDate} onChange={handleStartDateChange} format='YYYY-MM-DD' />
                      </div>
                      <div>
                        <DatePicker value={endDate} onChange={handleEndDateChange} format='YYYY-MM-DD' />
                      </div>
                      <Button variant='contained' size='sm' onClick={handleSubmit} style={{ paddingLeft: '10px' }}>
                        <ReplayIcon />
                        Generear gráfico
                      </Button>
                    </Row>
                  </LocalizationProvider>
                </CardHeader>
                <CardBody>
                  <Pie data={pieChartDataByRangeDate} />
                </CardBody>
              </Card>
            </div>
          ) : (
            <></>
          )}

          {verTablaTicketSemana === 1 ? (
            <div className='col-xl-4 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
              <Card className='shadow'>
                <CardHeader>
                  <h3 className='mb-0'>Tickets cerrados semanal</h3>
                  <Row>
                    <div style={{ paddingLeft: '10px' }}>
                      <input type='date' onChange={handleWeekChange} />
                    </div>
                  </Row>
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

          {verLinealSemanal === 1 ? (
            <div className='col-xl-8 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
              <Card className='shadow'>
                <CardHeader>
                  <h3 className='mb-0'>Estadísticas de la semana actual</h3>
                </CardHeader>

                <CardBody style={{ paddingTop: '0' }}>
                  <Line data={LineChartData} options={options} />
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

export default Statistics
