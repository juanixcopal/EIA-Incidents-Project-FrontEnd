import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { useFetchInitHistorial } from '../../../hooks/historial/index'
import { Card, CardContent, Typography, Box } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Header from '../../../components/header/Header'
import { Container, Row, Button } from 'reactstrap'
import { Search } from '@mui/icons-material'

const Historial = () => {
  const mainHook = useFetchInitHistorial()
  const { FetchIncidencesByUser, selectedDate, handleDateChange, handleSubmit } = mainHook
  const { incidences } = FetchIncidencesByUser

  return (
    <>
      <Header />
      <Container className='mt--8' fluid>
        <Row style={{ paddingLeft: '2em' }}>
          <div className='col-xl-7 col-md-12 col-sm-12 row '>
            <h1 className='notIncidences'>PUEDES BUSCAR TUS INCIDENCIAS AQUI</h1>
            <span className='bi bi-clock-history text-info' style={{ fontSize: '50px' }} />
          </div>
          <div className='col-xl-5 col-md-12 col-sm-12'>
            <Box
              component='form'
              sx={{
                '& > :not(style)': { m: 1, width: '22ch' }
              }}
              noValidate
              autoComplete='off'
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={selectedDate} onChange={handleDateChange} />
                <Button variant='contained' onClick={handleSubmit} style={{ width: 'auto' }}>
                  <Search />
                  Buscar Incidencias
                </Button>
              </LocalizationProvider>
            </Box>
          </div>
        </Row>
        <Row>
          {incidences.map(item => {
            const { id_reporte, aula, titulo, descripcion, tipo_aula, fecha_creacion, comentario, estado, fecha_cierre } = item
            return (
              <div key={id_reporte} className='col-xl-4 col-md-6 col-sm-12' style={{ paddingBottom: '30px' }}>
                <Card className='border-success radius-10'>
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='div'>
                      {tipo_aula} {aula}
                    </Typography>
                    <hr></hr>
                    <div>
                      <Typography variant='body'>
                        <Typography variant='h6'>Titulo:</Typography>
                        <Typography variant='h5' color='text.secondary'>
                          {titulo}
                        </Typography>
                      </Typography>
                    </div>
                    <div>
                      <Typography variant='body'>
                        <Typography variant='h6'>Descripcion:</Typography>
                        <Typography variant='h5' color='text.secondary'>
                          {descripcion}
                        </Typography>
                      </Typography>
                    </div>
                    <div>
                      <Typography variant='body'>
                        <Typography variant='h6'>Comentario:</Typography>
                        <Typography variant='h5' color='text.secondary'>
                          {comentario}
                        </Typography>
                      </Typography>
                    </div>
                    <div>
                      <Typography variant='body'>
                        <Typography variant='h6'>Estado:</Typography>
                        <Typography variant='h5' color='text.secondary'>
                          {estado}
                        </Typography>
                      </Typography>
                    </div>
                    <div>
                      <Typography variant='body'>
                        <Typography variant='h6'>Fecha y hora de creacion:</Typography>
                        <Typography variant='h5' color='text.secondary'>
                          {fecha_creacion}
                        </Typography>
                      </Typography>
                    </div>
                    <div>
                      <Typography variant='body'>
                        <Typography variant='h6'>Fecha y hora de modificacion:</Typography>
                        <Typography variant='h5' color='text.secondary'>
                          {fecha_cierre}
                        </Typography>
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Historial
