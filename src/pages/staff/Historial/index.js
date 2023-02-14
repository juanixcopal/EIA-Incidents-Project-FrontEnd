import Header from '../../../components/header/Header'
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'
import { useFetchInitHistorial } from '../../../hooks/historial/index'

const Historial = () => {
  const mainHook = useFetchInitHistorial()
  const { FetchIncidencesByUser } = mainHook
  const { incidences } = FetchIncidencesByUser

  return (
    <>
      <Header />
      <div className='col-12 mt--8 row '>
        {incidences.map(item => {
          const { id_reporte, aula, titulo, descripcion, planta, tipo_aula, fecha_creacion, comentario, estado } = item
          return (
            <div key={id_reporte} className='Content-Cards col-xl-4 col-md-6 col-sm-12'>
              <Card className='border-success radius-10 '>
                <CardContent>
                  <Typography>Planta: {planta}</Typography>
                  <Typography>
                    {tipo_aula} {aula}
                  </Typography>
                  <Typography>Titulo: {titulo}</Typography>
                  <Typography>Descripcion: {descripcion}</Typography>
                  <Typography>Comentario: {comentario}</Typography>
                  <Typography>Estado: {estado}</Typography>
                  <Typography>Fecha Creacion: {fecha_creacion}</Typography>
                </CardContent>
              </Card>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Historial
