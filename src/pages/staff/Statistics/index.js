import Header from '../../../components/header/Header'
import { useFetchStatistics } from '../../../hooks/statistics/index'
import { Container, Row, Card, CardHeader, CardBody, Button } from 'reactstrap'
import { Pie, Line } from 'react-chartjs-2'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import ReplayIcon from '@mui/icons-material/Replay'

const Statistics = () => {
  const mainHook = useFetchStatistics()

  const { FetchTypeIncidencesClosed, startDate, handleStartDateChange, handleEndDateChange, endDate, handleSubmit, FetchTypeIncidencesClosedByRangeDate } =
    mainHook

  const { typeIncidencesClosed } = FetchTypeIncidencesClosed

  const { typeIncidencesClosedByRangeDate } = FetchTypeIncidencesClosedByRangeDate

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
          '#bb73Fa'
        ]
      }
    ],
    options: {
      responsive: true
    }
  }

  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Ventas',
        data: [1200, 1500, 900, 2000, 1800, 2200],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Cosas',
        data: [1200, 150, 9000, 200, 1800, 2200],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }

  return (
    <>
      <Header />
      <Container className='mt--8' fluid>
        <Row>
          <div className='col-xl-8 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
            <Card className='shadow'>
              <CardHeader>
                <h3 className='mb-0'>Estadísticas de incidencias del mes: {mesActual}</h3>
              </CardHeader>
              <CardBody>
                <Pie data={pieChartData} />
              </CardBody>
            </Card>
          </div>

          <div className='col-xl-8 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
            <Card className='shadow'>
              <CardHeader>
                <h3 className='mb-0'>Estadísticas de incidencias</h3>
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

          <div className='col-xl-8 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
            <Card className='shadow'>
              <CardHeader>
                <h3 className='mb-0'>Estadísticas de incidencias del mes: {mesActual}</h3>
              </CardHeader>
              <CardBody>
                <Line data={data} />
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Statistics
