import Header from '../../../components/header/Header'
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'
import { useFetchInitDashboard } from '../../../hooks/dashboard/index'
import MainModal from './modal-component/index.js'
import '../../../styles/dashboard/index.css'

const Dashboard = () => {
  const mainHook = useFetchInitDashboard()
  const { FetchReportsData, toggle } = mainHook
  const { dataReports } = FetchReportsData

  return (
    <>
      <Header />
      <MainModal useFetchInit={mainHook} />

      {dataReports.length > 0 ? (
        <div className='col-12 mt--8 row'>
          {dataReports.map(item => {
            const { id_reporte, aula, titulo, descripcion, tipo_aula, fecha_creacion } = item
            return (
              <div key={id_reporte} className='Content-Cards col-xl-4 col-md-6 col-sm-12'>
                <Card className='border-danger radius-10 '>
                  <CardContent>
                    {/* <Typography>Planta: {planta}</Typography> */}
                    <Typography gutterBottom variant='h6' component='div'>
                      {tipo_aula} {aula}
                    </Typography>
                    <hr></hr>
                    <div>
                      <Typography variant='body' color='text.secondary'>
                        <Typography>Titulo:</Typography> {titulo}
                      </Typography>
                    </div>
                    <div>
                      <Typography variant='body' color='text.secondary'>
                        <Typography>Descripcion:</Typography> {descripcion}
                      </Typography>
                    </div>
                    <Typography variant='body' color='text.secondary'>
                      <Typography>Fecha Creacion:</Typography> {fecha_creacion}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' type='button' onClick={() => toggle(null, 'Cerrar Incidencia', 'resolve-incidence', item)}>
                      Ver Incidencia
                    </Button>
                  </CardActions>
                </Card>
              </div>
            )
          })}
        </div>
      ) : (
        <div className='col-12 mt--8 row' style={{ paddingLeft: '6em' }}>
          <h1>NO HAY INCIDENCIAS</h1>
        </div>
      )}
    </>
  )
}

export default Dashboard
