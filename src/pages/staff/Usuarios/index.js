import Header from '../../../components/header/Header'
import { Container, Row, Card, CardHeader, Table, Media } from 'reactstrap'
import { useFetchInitUsers } from '../../../hooks/users/index'
import { Typography, IconButton } from '@mui/material'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import MainModal from './modal-component'

const Usuarios = () => {
  const mainHook = useFetchInitUsers()
  const { FetchAllUsers, toggle } = mainHook
  const { users } = FetchAllUsers
  return (
    <>
      <Header />
      <MainModal useFetchInit={mainHook} />
      <Container className='mt--8' fluid>
        <Row style={{ paddingBottom: '2em' }}>
          <div className='col-xl-8 col-md-12 col-sm-12 '>
            <Card className='shadow'>
              <CardHeader className='border-0'>
                <Typography variant='h6'>Usuarios registrados</Typography>
              </CardHeader>
              <Table className='align-items-center table-flush' responsive>
                <thead className='thead-light'>
                  <tr>
                    <th scope='col'>Usuario</th>
                    <th scope='col'>Rol</th>
                    <th scope='col'>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(item => {
                    const { id_user, username, rol_usuario } = item

                    return (
                      <tr key={id_user}>
                        <th scope='row'>
                          <Media>
                            <span className='mb-0 text-sm'>{username}</span>
                          </Media>
                        </th>
                        <td>{rol_usuario}</td>
                        <td>
                          <IconButton
                            color='primary'
                            aria-label='upload picture'
                            component='label'
                            onClick={() => toggle(null, 'Modificar rol de usuario', 'modify-user', item)}
                          >
                            <ManageAccountsIcon />
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

export default Usuarios
