import Header from '../../components/header/Header'
import { Col, Container, Row } from 'reactstrap'
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'
import { useFetchReports } from '../../hooks/incidents/fetch-data'
import '../../styles/pages/dashboard.css';
const Dashboard = () => {
  const mainHook = useFetchReports()

  const { dataReports } = mainHook

  // const { id_reporte, id_aula, id_estado_incidencia, titulo, descripcion, fecha_creacionfecha_creacion } = dataReports

  return (
    <>
      <Header />
      <Container className='mt--7' fluid>
        <Row>
            {dataReports.map(item => {
              const { id_reporte, aula, titulo, descripcion, planta, tipo_aula } = item
              // console.log(item)
              return (
                // <div key={id_reporte}>
                //   <h2>{aula}</h2>
                // </div>
                <div key={id_reporte} className='col-xl-3 col-md-4 col-sm-12'>
                  <div className='Content-Cards'>
                    <Card className='ClassroomCard'>
                      <CardContent className='classroomContent'>
                        <Typography>Planta: {planta}</Typography>
                        <Typography>
                          {tipo_aula} {aula}
                        </Typography>
                        <Typography>Titulo: {titulo}</Typography>
                        <Typography>Descripcion: {descripcion}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button>Ver Incidencia</Button>
                      </CardActions>
                    </Card>
                  </div>
                </div>
              )
            })}
        </Row>
      </Container>
    </>
  )
}

export default Dashboard
