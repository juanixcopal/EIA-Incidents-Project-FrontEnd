import Header from '../../components/header/Header'
import { Col, Container, Row } from 'reactstrap'

import { useFetchReports } from '../../hooks/incidents/fetch-data'

const Dashboard = () => {
  const mainHook = useFetchReports()

  const { dataReports } = mainHook

  // const { id_reporte, id_aula, id_estado_incidencia, titulo, descripcion, fecha_creacionfecha_creacion } = dataReports

  return (
    <>
      <Header />
      <Container className='mt--7' fluid>
        <Row>
          <Col>
            <h1>Dashboard</h1>
            {dataReports.map(item => {
              const { id_reporte, id_aula, id_estado_incidencia, titulo, descripcion, fecha_creacion } = item
              return (
                <div key={id_reporte}>
                  <h2>{fecha_creacion}</h2>
                  <h2>Holaaa</h2>
                </div>
              )
            })}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard
