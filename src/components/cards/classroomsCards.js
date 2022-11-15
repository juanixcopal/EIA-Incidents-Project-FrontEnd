import React, { useState } from 'react'
// import '../../styles/classroomsCards/classroomsCards.css'
import { useFetchInitClassrooms } from '../../hooks/classrooms/index'
import { useFetchInitDataReports } from '../../hooks/dataReports/index'

import TabPanel from '@mui/lab/TabPanel'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

import Modal from '../modal/Modal.js'

import axios from 'axios'

import { alertMessage } from '../../hooks/common/toast-alert'

const ClassroomsCards = () => {
    const { FetchClassrooms } = useFetchInitClassrooms()
    const { classrooms } = FetchClassrooms

    const { FetchDataReports } = useFetchInitDataReports()
    const { reportsData } = FetchDataReports

    const [stateModal, setStateModal] = useState({
        open: false,
        title: '',
        component: '',
        params: {}
    })

    const toggle = (_, title, component, params) => {
        setStateModal({
            ...stateModal,
            open: !stateModal.open,
            title,
            component,
            params
        })
    }

    const [state, setState] = useState({
        titulo: '',
        descripcion: '',
        id_estado_incidencia: 1
    })

    const handleChange = e => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { id_aula } = stateModal.params
        const userData = {
            titulo: state.titulo,
            descripcion: state.descripcion,
            id_estado_incidencia: state.id_estado_incidencia,
            id_aula
        }
        axios.post('http://172.27.20.114:3050/v1/incidences/manager', userData).then(({ data }) => {
            console.log('CREATEEE>>>>>>>>>>>>>>>>>>>>> ', data)
            // console.log(response.status);
            // console.log(response.data);
            alertMessage(data, toggle)
        })
    }

    return (
        <div className='MapClass'>
            {classrooms.map(item => {
                const { id_aula, aula, tipo_aula, id_planta } = item
                return (
                    <TabPanel value={String(id_planta)} key={id_aula}>
                        <Card className='cards'>
                            <div
                                className={`status-${
                                    reportsData.filter(e => e.estado === 'abierto' && e.id_aula === id_aula).length > 0 ? 'problem' : 'success'
                                }`}
                            />

                            <CardContent>
                                <Typography variant='h5' component='div'>
                                    {tipo_aula} {aula}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' onClick={() => toggle(null, [[tipo_aula] + ' ' + [aula]], 'create-incidence', item)}>
                                    Añadir Incidencia
                                </Button>
                            </CardActions>
                        </Card>
                    </TabPanel>
                )
            })}

            <Modal state={stateModal.open} statusChange={toggle} title={stateModal.title}>
                <div className='content'>
                    <div className='incident-form'>
                        <form onSubmit={handleSubmit} action='#'>
                            <p>
                                <label>Titulo</label>
                                <input type='text' name='titulo' value={state.titulo} onChange={handleChange} />
                            </p>
                            <p>
                                <label>Descripcion</label>
                                <textarea name='descripcion' rows='5' value={state.descripcion} onChange={handleChange}></textarea>
                            </p>
                            <button type='submit' className='rightButtonAccept'>
                                Crear
                            </button>
                            <button className='leftButtonCancel' onClick={toggle}>
                                Cancelar
                            </button>
                        </form>
                    </div>
                    {/* <button type="button" onClick={() => console.log(stateModal)}>Ver state</button> */}
                </div>
            </Modal>
        </div>
    )
}

export default ClassroomsCards
