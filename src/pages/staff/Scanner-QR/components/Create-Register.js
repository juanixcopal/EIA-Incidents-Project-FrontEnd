import { useState } from 'react'
import QrScann from './Qr-Scann'
import { Card, CardContent, CardActions, Container } from '@mui/material'

const CreateRegister = () => {
  const [registerData, setRegisterData] = useState({})
  const [formValues, setFormValues] = useState({
    Numero_Chromebook: '',
    ProID: '',
    SN: '',
    Id_Carrito: '',
    Id_Estado: '',
    comentario: ''
  })

  const handleScann = data => {
    setRegisterData(data)
    setFormValues({
      Numero_Chromebook: data.Numero_Chromebook || '',
      ProID: data.ProID || '',
      SN: data.SN || '',
      Id_Carrito: data.Id_Carrito || '',
      Id_Estado: data.Id_Estado || '',
      comentario: data.comentario || ''
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    console.log('ENVIO FORMULARIO', formValues)
  }

  const handleInputChange = event => {
    const { name, value } = event.target
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  return (
    <>
      <div className='col-12 row'>
        <div className='col-xl-6 col-md-12 col-sm-12' style={{ marginBottom: '30px' }}>
          <Card style={{ borderRadius: '3%' }}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label>Numero Chromebook:</label>

                  <input
                    className='input-group form-control'
                    type='text'
                    name='Numero_Chromebook'
                    value={formValues.Numero_Chromebook}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>

                <div className='form-group'>
                  <label>ProID:</label>
                  <input className='input-group form-control' type='text' name='ProID' value={formValues.ProID} onChange={handleInputChange} disabled />
                </div>

                <div className='form-group'>
                  <label>SN:</label>
                  <input className='input-group form-control' type='text' name='SN' value={formValues.SN} onChange={handleInputChange} disabled />
                </div>

                <div className='form-group'>
                  <label>Id Carrito:</label>
                  <input
                    className='input-group form-control'
                    type='text'
                    name='Id_Carrito'
                    value={formValues.Id_Carrito}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>

                <div className='form-group'>
                  <label>Id Estado:</label>
                  <input className='input-group form-control' type='text' name='Id_Estado' value={formValues.Id_Estado} onChange={handleInputChange} required />
                </div>

                <div className='form-group'>
                  <label>Comentario:</label>
                  <input
                    className='input-group form-control'
                    type='text'
                    name='comentario'
                    value={formValues.comentario}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <CardActions>
                  <button type='submit' className='rightButtonAccept'>
                    Modificar
                  </button>
                </CardActions>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className='col-xl-6 col-md-12 col-sm-12'>
          <Card style={{ display: 'inline-table', borderRadius: '5%' }}>
            <CardContent style={{ margin: '10px' }}>
              <QrScann onScan={handleScann} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default CreateRegister
