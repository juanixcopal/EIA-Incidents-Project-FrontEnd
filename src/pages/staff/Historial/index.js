import Header from '../../../components/header/Header'
import { Card, CardContent, Typography } from '@mui/material'
import { useFetchInitHistorial } from '../../../hooks/historial/index'

const Historial = () => {
  const mainHook = useFetchInitHistorial()
  const { FetchIncidencesByUser } = mainHook
  const { incidences } = FetchIncidencesByUser

  return (
    <>
      <Header />
      {incidences.length > 0 ? (
        <div className='col-12 mt--8 row' style={{ paddingLeft: '3em' }}>
          {incidences.map(item => {
            const { id_reporte, aula, titulo, descripcion, tipo_aula, fecha_creacion, comentario, estado, fecha_cierre } = item
            return (
              <div key={id_reporte} className='Content-Cards col-xl-4 col-md-6 col-sm-12'>
                <Card className='border-success radius-10 '>
                  <CardContent>
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
                    <div>
                      <Typography variant='body' color='text.secondary'>
                        <Typography>Comentario:</Typography> {comentario}
                      </Typography>
                    </div>
                    <div>
                      <Typography variant='body' color='text.secondary'>
                        <Typography>Estado:</Typography> {estado}
                      </Typography>
                    </div>
                    <div>
                      <Typography variant='body' color='text.secondary'>
                        <Typography>Fecha Creacion:</Typography> {fecha_creacion}
                      </Typography>
                    </div>
                    <Typography variant='body' color='text.secondary'>
                      <Typography>Fecha Modificacion: </Typography> {fecha_cierre}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      ) : (
        <>
          <div className='col-12 mt--8 row' style={{ paddingLeft: '3em' }}>
            <h1 className='notIncidences'>TUS INCIDENCIAS APARECERÁN AQUI</h1>
            <span className='bi bi-clock-history text-info' style={{ fontSize: '50px' }} />
          </div>
        </>
      )}
    </>
  )
}

export default Historial
