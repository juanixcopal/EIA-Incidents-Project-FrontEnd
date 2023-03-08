import { useState } from 'react'
import Header from '../../../components/header/Header'
import { Container, Card, CardHeader, Row, CardBody } from 'reactstrap'
import '../../../styles/tickets/index.css'

const Tickets = () => {
  const [temperature, setTemperature] = useState(8)

  const handleTemperatureChange = event => {
    setTemperature(parseInt(event.target.value))
  }

  const getTemperatureColor = () => {
    const hue = (1 - temperature / 100) * 120
    return `hsl(${hue}, 100%, 50%)`
  }
  return (
    <>
      <Header />
      <Container className='mt--8' fluid>
        <Row>
          <div className='col-6'>
            <Card className='shadow'>
              <CardHeader>
                <h3 className='mb-0'>Termometro</h3>
              </CardHeader>
              <CardBody>
                <div className='App'>
                  <div className='thermometer'>
                    <div className='mercury' style={{ height: `${temperature}%`, backgroundColor: getTemperatureColor() }}></div>
                  </div>
                  <input type='range' min='-20' max='100' value={temperature} onChange={handleTemperatureChange} />
                  <p>{temperature}°C</p>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className='col'>
            <Card className='shadow'>
              <CardHeader>
                <h3 className='mb-0'>Tickets Por Agente</h3>
              </CardHeader>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Tickets
