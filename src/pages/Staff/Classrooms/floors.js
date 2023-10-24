import MainCard from 'ui-component/cards/MainCard'

import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material'

import { ExpandMore } from '@mui/icons-material'

import { gridSpacing } from 'store/constant'

import Loading from 'ui-component/loading'

const Floors = ({ mainHook }) => {
  const { toggle, FetchFloors, expanded, handleChange, FetchClassroomsByFloor } = mainHook
  const { floors } = FetchFloors
  const { classroomsByFloor, loadingClassroomsByFloor } = FetchClassroomsByFloor

  return (
    <>
      <Grid item xs={12}>
        {floors.map(item => {
          const { id_planta, planta } = item

          return (
            <Accordion key={id_planta} expanded={expanded === id_planta} onChange={handleChange(id_planta)}>
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1bh-content' id='panel1bh-header'>
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Planta {planta}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Loading loading={loadingClassroomsByFloor} />
                <Grid container spacing={gridSpacing}>
                  {!loadingClassroomsByFloor && (
                    <>
                      {classroomsByFloor.map(item => {
                        const { id_aula, aula, tipo_aula } = item

                        return (
                          <Grid key={id_aula} item lg={3} md={3} sm={12} xs={12}>
                            <MainCard style={{ cursor: 'pointer' }} onClick={() => toggle(null, 'Datos del salón', 'view-classrooms', item)}>
                              <Grid item>
                                <Typography>
                                  {tipo_aula} {aula}
                                </Typography>
                              </Grid>
                            </MainCard>
                          </Grid>
                        )
                      })}
                    </>
                  )}
                </Grid>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Grid>
    </>
  )
}

export default Floors
