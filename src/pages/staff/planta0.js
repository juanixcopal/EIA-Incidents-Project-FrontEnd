import Header from '../../components/header/Header.js'
import { Col, Container, Row } from 'reactstrap'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useFetchInitIncidents } from '../../hooks/incidents/index.js'
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'
import '../../styles/pages/planta0.css'

const Planta_0 = () => {

    const mainHook = useFetchInitIncidents()
    const { data, handleInputChange, FetchFloors, FetchClassrooms, FetchDataReports, toggle, Actions } = mainHook
    const { floors, loadingFloors } = FetchFloors
    const { id_floor } = data
    const { classrooms, loadingClassrooms } = FetchClassrooms
    const { reportsData } = FetchDataReports


    return (
        <>
            <Header />
            <Container className='mt--7' fluid>
                <TabContext value={String(id_floor)}>
                    {/* <Box>
                        <TabList onChange={(_, value) => handleInputChange({ target: { name: 'id_floor', value } })} aria-label='lab API tabs example'>
                            {floors.map(({ id_planta, planta }) => {
                                return <Tab key={id_planta} label={`Planta ${planta}`} value={String(id_planta)} />
                            })}
                        </TabList>
                    </Box>
                    <div className='col-12 row'>
                        {classrooms.map(item => {
                            const { id_aula, aula, tipo_aula, id_planta } = item
                            return (
                                <TabPanel key={id_aula} value={String(id_planta)} className='col-xl-3 col-md-4 col-sm-12 '>
                                    <div className='Content-Cards'>
                                        <Card className='Cards'>
                                            <div
                                                className={`Status-${reportsData.filter(e => e.estado === 'abierto' && e.id_aula === id_aula).length > 0 ? 'problem' : 'success'}`} />
                                            <CardContent>
                                                <Typography>
                                                    {tipo_aula} {aula}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabPanel>
                            )
                        })}
                    </div> */}
                    <div className="prueba_de_div">Hola</div>
                </TabContext>
            </Container>
        </>
    )
}

export default Planta_0
