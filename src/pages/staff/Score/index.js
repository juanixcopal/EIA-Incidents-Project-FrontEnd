import Header from '../../../components/header/Header'
import { useFetchInitUsersAndScore } from '../../../hooks/score/index'
import { IconButton } from '@mui/material'
import { RemoveCircle, AddCircle } from '@mui/icons-material'
import { Container, Row, Card, CardHeader, Table, Media } from 'reactstrap'
import MainModal from './modal-component/index.js'

const Score = () => {
  const mainHook = useFetchInitUsersAndScore()
  const { FetchUsersAndScore, toggle } = mainHook
  const { score } = FetchUsersAndScore
  return (
    <>
      <Header />
      <MainModal useFetchInit={mainHook} />
      <Container className='mt--8' fluid>
        <Row>
          <div className='col'>
            <Card className='shadow'>
              <CardHeader className='border-0'>
                <h3 className='mb-0'>Tabla Puntaje Equipo Intervención Ágil</h3>
              </CardHeader>
              <Table className='align-items-center table-flush' responsive>
                <thead className='thead-light'>
                  <tr>
                    <th scope='col'>Usuario</th>
                    <th scope='col'>Puntaje</th>
                    <th scope='col'>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {score.map(item => {
                    const { username, score } = item

                    return (
                      <tr key={username}>
                        <th scope='row'>
                          <Media>
                            <span className='mb-0 text-sm'>{username}</span>
                          </Media>
                        </th>
                        <td>{score} puntos</td>
                        <td>
                          <IconButton onClick={() => toggle(null, 'Méritos', 'merits', item)} color='primary' aria-label='upload picture' component='label'>
                            <AddCircle />
                          </IconButton>
                          <IconButton onClick={() => toggle(null, 'Deméritos', 'demerits', item)} color='primary' aria-label='upload picture' component='label'>
                            <RemoveCircle />
                          </IconButton>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Score
