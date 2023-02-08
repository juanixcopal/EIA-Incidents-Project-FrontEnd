import Header from '../../../components/header/Header'
import { Container, Row } from 'reactstrap'
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'
import { useFetchInitIncidents } from '../../../hooks/incidents/index'
import MainModal from './modal-component/index.js'
import '../../../styles/pages/dashboard.css'
const Dashboard = () => {
  const mainHook = useFetchInitIncidents()

  const { FetchReportsData, toggle } = mainHook
  const { dataReports } = FetchReportsData

  return (
    <>
      <Header />
      <MainModal useFetchInit={mainHook} />
      <Container className='mt--7' fluid>
        <Row>
          {dataReports.map(item => {
            const { id_reporte, aula, titulo, descripcion, planta, tipo_aula, fecha_creacion } = item
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
                      <Typography>Fecha Creacion: {fecha_creacion}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' type='button' onClick={() => toggle(null, 'Cerrar Incidencia', 'resolve-incidence', item)}>
                        Ver Incidencia
                      </Button>
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
