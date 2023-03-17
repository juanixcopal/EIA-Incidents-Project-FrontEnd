import React from 'react'
import { Box, Tab, Badge } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useFetchInitIncidents } from '../../hooks/incidents/index'
import { Container, Row } from 'reactstrap'
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'
import MainModal from './modal-component/index.js'
import '../../styles/incidents/index.css'

import Logo from '../../images/logoWhite-new.png'

const Incidents = () => {
  const mainHook = useFetchInitIncidents()

  const { data, handleInputChange, FetchFloors, FetchClassrooms, FetchDataReports, toggle } = mainHook
  const { floors } = FetchFloors
  const { classrooms } = FetchClassrooms

  const { reportsData } = FetchDataReports

  const { id_floor } = data

  const login = () => {
    window.location.href = '/user/dashboard'
  }
  return (
    <>
      <div className='Header'>
        <img src={Logo} alt='Logo EIA' className='logoUneat' />
        <div className='Title-Content'>
          <h1 className='Title'>Incidencias de aulas</h1>
        </div>
        <div className='Button-Content'>
          <button type='button' className='btn btn-white Button-Login' onClick={login}>
            Iniciar sesión
          </button>
        </div>
      </div>

      <MainModal useFetchInit={mainHook} />

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <p className='waterMark'>Por: Intervención Ágil</p>
        <TabContext value={String(id_floor)}>
          <Box>
            <TabList onChange={(_, value) => handleInputChange({ target: { name: 'id_floor', value } })} aria-label='lab API tabs example'>
              {floors.map(({ id_planta, planta }) => {
                return (
                  <Tab
                    key={id_planta}
                    label={
                      <>
                        <Badge color='primary' badgeContent={reportsData.filter(e => e.estado === 'Abierto' && e.id_planta === id_planta).length}>
                          Planta {planta}
                        </Badge>
                      </>
                    }
                    value={String(id_planta)}
                  />
                )
              })}
            </TabList>
          </Box>
          <Container fluid>
            <Row>
              {classrooms.map(item => {
                const { id_aula, aula, tipo_aula, id_planta } = item
                return (
                  <TabPanel key={id_aula} value={String(id_planta)} className='col-xl-3 col-md-4 col-sm-12 '>
                    <div className='Content-Cards'>
                      <Card className='Cards'>
                        <div
                          className={`Status-${reportsData.filter(e => e.estado === 'Abierto' && e.id_aula === id_aula).length > 0 ? 'problem' : 'success'}`}
                        />

                        <CardContent>
                          <Typography>
                            {tipo_aula} {aula}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size='small' type='button' onClick={() => toggle(null, 'Crear Incidencia', 'create-incidence', item)}>
                            Crear Reporte
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                  </TabPanel>
                )
              })}
            </Row>
          </Container>
        </TabContext>
      </Box>
    </>
  )
}

export default Incidents
