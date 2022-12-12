import React, { useState } from 'react'
import { alertMessage } from '../../hooks/common/toast-alert'
import axios from 'axios'
import Select from 'react-select'
import { useFetchInitFlats } from 'hooks/flats'
import { useFetchInitTypeClassrooms } from 'hooks/typeClassrooms'

export default function CreateClassroom({ cancel, close }) {
    const { FetchFlats } = useFetchInitFlats()
    const { flats } = FetchFlats
    const { FetchTypeClassrooms } = useFetchInitTypeClassrooms()
    const { typeClassrooms } = FetchTypeClassrooms

    const [data, setData] = useState({
        aula: '',
        id_planta: '',
        id_tipo_aula: ''
    })

    const { aula, id_planta, id_tipo_aula } = data

    const handleInputChage = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (!id_planta || !id_tipo_aula) {
            alertMessage({ result: false, message: 'Aun hay campos sin rellenar' })
            return
        }
        axios.post(`${process.env.REACT_APP_API_BASE}/v1/classrooms/manager`, data).then(({ data }) => {
            alertMessage(data)
        })
    }

    return (
        <div className='incident-form'>
            <form onSubmit={handleSubmit}>
                <div style={{ padding: '0 0 10px 0' }}>
                    <label>No. Aula</label>
                    <input type='text' name='aula' value={aula} onChange={handleInputChage} required />
                </div>
                <div style={{ padding: '0 0 10px 0' }}>
                    <label>Tipo</label>
                    <Select
                        options={typeClassrooms}
                        defaultValue={id_tipo_aula}
                        onChange={({ value }) => handleInputChage({ target: { name: 'id_tipo_aula', value } })}
                    />
                </div>
                <div style={{ padding: '0 0 15px 0' }}>
                    <label>Planta</label>
                    <Select options={flats} defaultValue={id_planta} onChange={({ value }) => handleInputChage({ target: { name: 'id_planta', value } })} />
                </div>
                <button type='submit' className='rightButtonAccept'>
                    Crear
                </button>
                <button className='leftButtonCancel' type='button' onClick={cancel}>
                    Cancelar
                </button>
            </form>
        </div>
    )
}
