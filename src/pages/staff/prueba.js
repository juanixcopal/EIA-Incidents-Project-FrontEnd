import Header from '../../components/header/Header.js'
import { Col, Container, Row } from 'reactstrap'
const Prueba = () => {
  return (
    <>
      <Header />
      <Container className='mt--7' fluid>
        <Row>
          <Col>
            <div>
              <h1>Holaaas</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Prueba
