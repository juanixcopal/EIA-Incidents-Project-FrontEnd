import { Grid, Typography, Card, CardContent, Divider, CardActions, Button } from '@mui/material'
import MainCard from 'ui-component/cards/MainCard'

import { gridSpacing } from 'store/constant'

import { useFetchInitDashboard } from 'hooks/dashboard'

import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import StreetviewIcon from '@mui/icons-material/Streetview'

const OpenIncidences = () => {
  const mainHook = useFetchInitDashboard()

  const { FetchReportsData } = mainHook

  const { dataReports, loadingDataReports } = FetchReportsData

  const titleStyle = {
    color: 'rgba(251, 41, 41, 1)'
  }

  const typographyStyle = {
    color: 'rgba(0, 0, 0, 0.54)'
  }

  return (
    <>
      {dataReports.length >= 1 ? (
        <>
          {dataReports.map(item => {
            const { id_reporte, aula, titulo, descripcion, tipo_aula, fecha_creacion, hora_creacion } = item
            return (
              <Grid key={id_reporte} item lg={3} md={3} sm={12} xs={12}>
                <MainCard>
                  <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                      <Grid container alignContent='center' justifyContent='space-between'>
                        <Grid item>
                          <Typography variant='h5' sx={titleStyle}>
                            Incidencia en {tipo_aula} {aula}
                          </Typography>
                        </Grid>

                        <Grid item>
                          <PriorityHighIcon color='info' />
                        </Grid>
                      </Grid>
                      <Divider />

                      <Grid container alignContent='start' justifyContent='start'>
                        <Card sx={{ maxWidth: 345 }}>
                          <Grid item>
                            <CardContent>
                              <Grid item>
                                <Typography variant='h4' color='text.secondary'>
                                  Titulo:
                                </Typography>
                                <Typography variant='h5' sx={typographyStyle}>
                                  {titulo}
                                </Typography>
                              </Grid>

                              <Grid item>
                                <Typography variant='h4' color='text.secondary'>
                                  Descripcion:
                                </Typography>
                                <Typography variant='h5' sx={typographyStyle}>
                                  {descripcion}
                                </Typography>
                              </Grid>

                              <Grid item>
                                <Typography variant='h4' color='text.secondary'>
                                  Fecha de Creacion:
                                </Typography>
                                <Typography variant='h5' sx={typographyStyle}>
                                  {fecha_creacion}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant='h4' color='text.secondary'>
                                  Hora de Creacion:
                                </Typography>
                                <Typography variant='h5' sx={typographyStyle}>
                                  {hora_creacion}
                                </Typography>
                              </Grid>
                            </CardContent>
                          </Grid>
                        </Card>
                      </Grid>
                      <Grid container alignContent='flex-end' justifyContent='flex-end'>
                        <CardActions>
                          <Grid item>
                            <Button variant='contained' endIcon={<StreetviewIcon />} color='inherit' disabled={loadingDataReports}>
                              Cerrar incidencia
                            </Button>
                          </Grid>
                        </CardActions>
                      </Grid>
                    </Grid>
                  </Grid>
                </MainCard>
              </Grid>
            )
          })}
        </>
      ) : (
        <Grid item>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignContent='center' justifyContent='space-between'>
                <Grid item>
                  <Typography variant='h3' color='inherit'>
                    No hay incidencias
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default OpenIncidences
