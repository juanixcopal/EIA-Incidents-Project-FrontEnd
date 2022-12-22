import React from 'react'
// import '../../styles/classroomsCards/classroomsCards.css'
import { useFetchInitClassrooms } from '../../hooks/classrooms/index'
import { useFetchInitDataReports } from '../../hooks/dataReports/index'

import TabPanel from '@mui/lab/TabPanel'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import IncidencesSkeleton from 'components/SkeletonIncidences/SkeletonClassrooms.js'
import Modal from './modal-components'

const Incidences = () => {
  const { FetchClassrooms } = useFetchInitClassrooms()
  const { classrooms } = FetchClassrooms

  const useFetchInit = useFetchInitDataReports()
  const { FetchDataReports, toggle } = useFetchInit
  const { reportsData } = FetchDataReports

  return (
    <>
      <Modal useFetchInit={useFetchInit} />
      {classrooms.length === 0 ? (
        <IncidencesSkeleton />
      ) : (
        <div className='MapClass'>
          {classrooms.map(item => {
            const { id_aula, aula, tipo_aula, id_planta } = item
            return (
              <TabPanel value={String(id_planta)} key={id_aula}>
                <Card className='cards'>
                  <div className={`status-${reportsData.filter(e => e.estado === 'abierto' && e.id_aula === id_aula).length > 0 ? 'problem' : 'success'}`} />

                  <CardContent>
                    <Typography variant='h5' component='div'>
                      {tipo_aula} {aula}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' onClick={() => toggle(null, 'Revisión de aulas', 'create-incidence', item)}>
                      Crear Reporte
                    </Button>
                  </CardActions>
                </Card>
              </TabPanel>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Incidences
