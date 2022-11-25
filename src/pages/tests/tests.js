import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import Modal2 from 'components/modal/Modal2'
import CreateClassroom from 'components/classrooms/createClassrooms'

const Test = () => {
    const [modalShow, setModalShow] = useState({
        open: false,
        title: '',
        component: '',
        params: {}
    })

    const toggle = (_, title, component, params) => {
        setModalShow({
            ...modalShow,
            open: !modalShow.open,
            title,
            component,
            params
        })
    }

    return (
        <>
            <div>
                <p>Prueba de Modal como Componente</p>
                <Button variant='primary' onClick={() => toggle(null, 'Modal1', '', <CreateClassroom />)}>
                    Abrir Modal1
                </Button>

                <Button variant='primary' onClick={() => toggle(null, 'Modal2', '', 'Contenido2')}>
                    Abrir Modal2
                </Button>

                <Modal2 title={modalShow.title} show={modalShow.open} onHide={() => setModalShow(false)} content={modalShow.params} />
            </div>
        </>
    )
}

export default Test
