import { useContext } from 'react'
import Header from '../../../components/header/Header'
import { useFetchInitChromebooks } from '../../../hooks/chromebooks/index'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import MainModal from './modal-component/index.js'
import { AuthContext } from '../../../provider/global.provider'
import { Button, Container, Row, Card, CardHeader, CardBody, CardImg } from 'reactstrap'
const Chromebooks = () => {
  const { authData } = useContext(AuthContext)
  const rol = authData.rol_usuario

  const mainHook = useFetchInitChromebooks()
  const { toggle, FetchCarritosChromebook } = mainHook
  const { carritos, loadingCarritos } = FetchCarritosChromebook
  return (
    <>
      <Header />
      <MainModal useFetchInit={mainHook} />
      <Container className='mt--8' fluid>
        <Row>
          <div className='col-xl-12 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
            {rol === 'superadmin' || rol === 'administrador' ? (
              <div>
                <Button onClick={() => toggle(null, 'Crear Chromebook', 'create-chromebook')}>
                  <AddCircleOutlineIcon /> Crear Chromebook
                </Button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <>
            {carritos.map(item => {
              const { id_armario, numero_carrito } = item
              return (
                <div key={id_armario} className='col-xl-6 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
                  <Card className='shadow'>
                    <CardHeader>
                      <h3 className='mb-0'>{numero_carrito}</h3>
                    </CardHeader>
                    <CardBody
                      style={{ textAlignLast: 'center', cursor: 'pointer' }}
                      onClick={() => toggle(null, `Chromebooks ${numero_carrito}`, 'view-chromebook', item)}
                    >
                      <CardImg
                        alt='Card image cap'
                        src='https://www.campuspdi.com/productos/imagenes/img_16299_f1beb139f1de2527762b67d2797e27e0_16.jpg'
                        style={{
                          height: 350,
                          width: 300
                        }}
                        top
                        width='100%'
                      />
                    </CardBody>
                  </Card>
                </div>
              )
            })}
          </>
        </Row>
      </Container>
    </>
  )
}

export default Chromebooks
