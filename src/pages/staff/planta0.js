import Header from '../../components/header/Header.js'
import { Col, Container, Row } from 'reactstrap'
// import { Box, Tab } from '@mui/material'
// import { TabContext, TabList, TabPanel } from '@mui/lab'
// import { useFetchInitIncidents } from '../../hooks/incidents/index.js'
// import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'
import '../../styles/pages/planta0.css'

const Planta_0 = () => {
  return (
    <>
      <Header />
      <Container className='mt--7' fluid>
        <Row>
          <Col>
            <div>
              <h1>Aulas Planta 0</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Planta_0
