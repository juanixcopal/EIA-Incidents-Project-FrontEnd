import React, { useEffect, useState } from 'react'
import socket from '../config/socket.io'

const Pruebas = () => {
  const [prueba, setPrueba] = useState([])

  useEffect(() => {
    socket.on('data', results => {
      setPrueba(results)
    })

    socket.emit('getData')

    socket.on('updateData', () => {
      socket.emit('getData')
    })
  }, [])

  const handleCreateData = event => {
    event.preventDefault()
    socket.emit('createData', { titulo: event.target.titulo.value, descripcion: event.target.descripcion.value })
  }

  return (
    <div>
      <ul>
        {prueba.map(item => {
          const { id_prueba, titulo, descripcion } = item
          return (
            <div key={id_prueba} style={{ border: '1px solid #000' }}>
              <h2>Titulo: {titulo}</h2>
              <h4>Descripcion: {descripcion}</h4>
            </div>
          )
        })}
      </ul>

      <form onSubmit={handleCreateData}>
        <div className='form-group'>
          <label>Titulo</label>
          <input className='input-group form-control' type='text' name='titulo' />
        </div>
        <div className='form-group'>
          <label>Descripcion</label>
          <input className='input-group form-control' type='text' name='descripcion' />
        </div>
        <button type='submit'>Create Data</button>
      </form>
    </div>
  )
}

export default Pruebas
