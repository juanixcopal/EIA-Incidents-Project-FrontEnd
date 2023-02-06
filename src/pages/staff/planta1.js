import Header from '../../components/header/Header.js'
import { Col, Container, Row } from 'reactstrap'

const Planta_1 = () => {
    return (
        <>
            <Header />
            <Container className='mt--7' fluid>
                <Row>
                    <Col>
                        <div>
                            <h1>Aulas Planta 1</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Planta_1
