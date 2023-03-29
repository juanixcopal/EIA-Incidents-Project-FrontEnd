import Header from '../../../components/header/Header'
import { Container, Row } from 'reactstrap'
const Chromebooks = () => {
  return (
    <>
      <Header />
      <Container className='mt--8' fluid>
        <Row>
          <div className='col-xl-7 col-md-12 col-sm-12 row '>
            <h2>Página para Chromebooks</h2>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Chromebooks
