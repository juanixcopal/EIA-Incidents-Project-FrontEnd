import React, { useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useFetchInitClassrooms } from 'hooks/classrooms/index'
import Modal from 'components/modal/Modal.js'
import CreateClassroom from 'components/classrooms/createClassrooms.js'
import DeleteClassrooms from 'components/classrooms/deleteClassrooms'
import EditClassrooms from 'components/classrooms/editClassrooms'
const PageClassrooms = () => {
    const { FetchClassrooms } = useFetchInitClassrooms()
    const { classrooms } = FetchClassrooms

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

    return (
        <>
            <div className='content'>
                <h2 className='text-center'>Lista de Aulas</h2>
                <div>
                    <button className='btn btn-primary' onClick={() => toggle(null, 'Crear Aula', '', <CreateClassroom cancel={setStateModal} />)}>
                        <GrAdd />
                    </button>
                </div>
                <br></br>
                <table className='table table-striped table-bordered'>
                    <thead className='text-center'>
                        <tr>
                            <th> Tipo</th>
                            <th> Numero</th>
                            <th> Planta</th>
                            <th> Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {classrooms.map(item => {
                            const { id_aula, aula, tipo_aula, planta } = item
                            return (
                                <tr key={id_aula}>
                                    <td>{tipo_aula}</td>
                                    <td>{aula}</td>
                                    <td>{planta}</td>
                                    <td>
                                        <button className='btn btn-info' onClick={() => toggle(null, 'Editar Aula', '', <EditClassrooms />)}>
                                            <AiFillEdit style={{ fontSize: '18px' }} />
                                        </button>
                                        <button
                                            style={{ marginLeft: '18px' }}
                                            className='btn btn-danger'
                                            onClick={() => toggle(null, 'Eliminar Aula', '', <DeleteClassrooms idAula={id_aula} />)}
                                        >
                                            <AiFillDelete style={{ fontSize: '18px' }} />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Modal state={stateModal.open} title={stateModal.title} statusChange={toggle} children={stateModal.params} />
        </>
    )
}

export default PageClassrooms
