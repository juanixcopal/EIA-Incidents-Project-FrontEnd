import React from 'react'
import { Card, CardBody, CardFooter, CardTitle, Col, Row } from 'reactstrap'

import { useFetchInitClassrooms } from 'hooks/classrooms/index'
import { useFetchInitDataReports } from 'hooks/dataReports/index'
import { Button, CardActions, CardContent, Typography } from '@mui/material'

import { AiFillLike, AiFillDislike, AiFillWarning } from 'react-icons/ai'

const FloorTwoIncidents = () => {
    const { FetchClassrooms } = useFetchInitClassrooms()
    const { classrooms } = FetchClassrooms

    const useFetchInit = useFetchInitDataReports()
    const { FetchDataReports } = useFetchInit
    const { reportsData } = FetchDataReports
    return (
        <>
            <div className='content'>
                <Row>
                    <Col lg='4' md='4' sm='4'>
                        <Card className='card-stats'>
                            <CardBody>
                                <Row>
                                    <Col md='4' xs='5'>
                                        <div style={{ height: '45px', marginTop: '15px', color: '#ca3433' }}>
                                            <AiFillDislike />
                                        </div>
                                    </Col>
                                    <Col md='8' xs='7'>
                                        <div className='numbers'>
                                            <p className='card-category'>Total Abiertas</p>
                                            <CardTitle tag='p'>
                                                {reportsData.filter(e => e.estado === 'abierto' && e.id_planta === 3).length} Incidencias
                                            </CardTitle>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col lg='4' md='4' sm='4'>
                        <Card className='card-stats'>
                            <CardBody>
                                <Row>
                                    <Col md='4' xs='4'>
                                        <div style={{ height: '45px', marginTop: '15px', color: '#e5be01' }}>
                                            <AiFillWarning />
                                        </div>
                                    </Col>
                                    <Col md='8' xs='5'>
                                        <div className='numbers'>
                                            <p className='card-category'>Total Pendientes</p>
                                            <CardTitle tag='p'>
                                                {reportsData.filter(e => e.estado === 'pendiente' && e.id_planta === 3).length} Incidencias
                                            </CardTitle>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col lg='4' md='4' sm='4'>
                        <Card className='card-stats'>
                            <CardBody>
                                <Row>
                                    <Col md='4' xs='5'>
                                        <div style={{ height: '45px', marginTop: '15px', color: '#258d19' }}>
                                            <AiFillLike />
                                        </div>
                                    </Col>
                                    <Col md='8' xs='5'>
                                        <div className='numbers'>
                                            <p className='card-category'>Total Cerradas</p>
                                            <CardTitle tag='p'>
                                                {reportsData.filter(e => e.estado === 'cerrado' && e.id_planta === 3).length} Incidencias
                                            </CardTitle>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    {classrooms
                        .filter(e => e.id_planta === 3)
                        .map(item => {
                            const { id_aula, aula, tipo_aula } = item
                            return (
                                <Col lg='3' md='3' sm='3' key={id_aula}>
                                    <Card>
                                        <div
                                            className={`statusFilter-${
                                                reportsData.filter(e => e.estado === 'abierto' && e.id_aula === id_aula).length > 0 ? 'problem' : 'success'
                                            }`}
                                        />
                                        <CardContent>
                                            <Typography variant='h5' component='div'>
                                                {tipo_aula} {aula}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                className={`${
                                                    reportsData.filter(e => e.estado === 'abierto' && e.id_aula === id_aula).length > 0 ? 'button' : 'prueba'
                                                }`}
                                            >
                                                Cerrar Incidencia
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Col>
                            )
                        })}
                </Row>
            </div>
        </>
    )
}

export default FloorTwoIncidents
