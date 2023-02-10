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

      <div className='col-12 mt--8 row'>
        {dataReports.map(item => {
          const { id_reporte, aula, titulo, descripcion, planta, tipo_aula, fecha_creacion } = item
          return (
            <div key={id_reporte} className='Content-Cards col-xl-4 col-md-6 col-sm-12'>
              <Card className='border-danger radius-10 '>
                <CardContent>
                  <Typography>Planta: {planta}</Typography>
                  <Typography>
                    {tipo_aula} {aula}
                  </Typography>
                  <Typography>Titulo: {titulo}</Typography>
                  <Typography>Descripcion: {descripcion}</Typography>
                  <Typography>Fecha Creacion: {fecha_creacion}</Typography>
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
    </>
  )
}

export default Dashboard

// import Header from '../../../components/header/Header'
// import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'
// import { useFetchInitIncidents } from '../../../hooks/incidents/index'
// import MainModal from './modal-component/index.js'
// import '../../../styles/dashboard/index.css'

// const Dashboard = () => {
//   const mainHook = useFetchInitIncidents()
//   const { FetchDataReports, toggle } = mainHook
//   const { dataReporte } = FetchDataReports
//   // console.log(FetchDataReports)

//   return (
//     <>
//       <Header />
//       <MainModal useFetchInit={mainHook} />

//       <div className='col-12 mt--8 row'>
//         {dataReporte.map(item => {
//           const { id_reporte, aula, titulo, descripcion, planta, tipo_aula, fecha_creacion } = item
//           return (
//             <div key={id_reporte} className='Content-Cards col-xl-4 col-md-6 col-sm-12'>
//               <Card className='border-danger radius-10 '>
//                 <CardContent>
//                   <Typography>Planta: {planta}</Typography>
//                   <Typography>
//                     {tipo_aula} {aula}
//                   </Typography>
//                   <Typography>Titulo: {titulo}</Typography>
//                   <Typography>Descripcion: {descripcion}</Typography>
//                   <Typography>Fecha Creacion: {fecha_creacion}</Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size='small' type='button' onClick={() => toggle(null, 'Cerrar Incidencia', 'resolve-incidence', item)}>
//                     Ver Incidencia
//                   </Button>
//                 </CardActions>
//               </Card>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }

// export default Dashboard
