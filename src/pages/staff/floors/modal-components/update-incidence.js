import React from 'react'
import { ModalBody } from 'reactstrap'
import { useFetchInitReports } from 'hooks/reports/index'
import { Button } from '@mui/material'

const UpdateIncidences = ({ useFetchInit }) => {
    const { dataModal } = useFetchInit
    const { id_aula } = dataModal.params

    const { FetchReportsData } = useFetchInitReports()
    const { dataReports } = FetchReportsData

    return (
        <>
            <ModalBody>
                <h6 style={{ color: '#C9C9C9', paddingLeft: '15px' }}>Incidencias creadas:</h6>
                {dataReports
                    .filter(e => e.id_aula === id_aula)
                    .map(item => {
                        const { titulo, descripcion, id_reporte } = item
                        return (
                            <div
                                key={id_reporte}
                                className='md-12 row'
                                style={{
                                    borderStyle: 'dotted',
                                    borderWidth: '2px',
                                    borderRadius: '20px',
                                    margin: '10px',
                                    borderColor: '#a7a7a7',
                                    padding: '10px'
                                }}
                            >
                                <div className='md-4' style={{ display: 'flex' }}>
                                    <h6>Titulo: </h6>
                                    <p>{titulo}</p>
                                </div>
                                <div className='md-4' style={{ display: 'flex' }}>
                                    <h6>Descripcion:</h6>
                                    <p>{descripcion}</p>
                                </div>
                                <div className='md-4' style={{ display: 'flow-root' }}>
                                    <Button className='modifyIncidenceBtn'> Modificar incidencia </Button>
                                </div>
                            </div>
                        )
                    })}
            </ModalBody>
        </>
    )
}

export default UpdateIncidences
