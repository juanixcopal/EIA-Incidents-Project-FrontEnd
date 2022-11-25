import React, { useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useFetchInitClassrooms } from 'hooks/classrooms/index'
import Modal from './modal-components'

const PageClassrooms = () => {
    const useFetchInit = useFetchInitClassrooms()
    const { FetchClassrooms, toggle } = useFetchInit
    const { classrooms } = FetchClassrooms

    return (
        <>
            <Modal useFetchInit={useFetchInit} />
            <div className='content'>
                <h2 className='text-center'>Lista de Aulas</h2>
                <div>
                    <button className='btn btn-primary' onClick={() => toggle(null, 'Crear Clase', 'create-classroom')}>
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
                                        <button className='btn btn-info'>
                                            <AiFillEdit style={{ fontSize: '18px' }} />
                                        </button>
                                        <button
                                            style={{ marginLeft: '18px' }}
                                            className='btn btn-danger'
                                            // onClick={() => toggle(null, 'Eliminar Aula', '', <DeleteClassrooms idAula={id_aula} />)}
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
        </>
    )
}

export default PageClassrooms
