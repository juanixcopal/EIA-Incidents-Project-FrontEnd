import { useState, useRef } from 'react'
import QRCode from 'qrcode.react'
import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'

const QRCodeGenerate = () => {
  const qrCodeRef = useRef(null)
  const [data, setData] = useState({
    Numero_Chromebook: '',
    ProID: '',
    SN: '',
    Id_Carrito: '',
    Id_Estado: 'ACTIVO'
  })

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('ENVIAR A LA API', data)
  }

  const handleDownloadQRCode = () => {
    html2canvas(qrCodeRef.current).then(canvas => {
      canvas.toBlob(blob => {
        saveAs(blob, `${data.Numero_Chromebook}.png`)
      })
    })
  }

  const jsonData = JSON.stringify(data)

  return (
    <div className='col-12 row'>
      <div className='col-6'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Numero Chromebook: </label>
            <input
              className='input-group form-control'
              type='text'
              name='Numero_Chromebook'
              value={data.Numero_Chromebook}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>ProID:</label>
            <input className='input-group form-control' type='text' name='ProID' value={data.ProID} onChange={handleInputChange} required />
          </div>

          <div className='form-group'>
            <label>SN:</label>
            <input className='input-group form-control' type='text' name='SN' value={data.SN} onChange={handleInputChange} required />
          </div>

          <div className='form-group'>
            <label>Id Carrito:</label>
            <input className='input-group form-control' type='text' name='Id_Carrito' value={data.Id_Carrito} onChange={handleInputChange} required />
          </div>

          <div className='form-group'>
            <label>Id Estado:</label>
            <input className='input-group form-control' type='text' name='Id_Estado' value={data.Id_Estado} onChange={handleInputChange} disabled />
          </div>

          <button type='submit' className='rightButtonAccept'>
            Guardar
          </button>
        </form>
      </div>
      <div>
        {jsonData && (
          <div ref={qrCodeRef} style={{ padding: '20px' }}>
            <QRCode value={jsonData} style={{ width: '228px', height: '228px' }} />
          </div>
        )}
      </div>
      <div>
        {jsonData && (
          <button className='rightButtonAccept' onClick={handleDownloadQRCode}>
            Descargar QR
          </button>
        )}
      </div>
    </div>
  )
}

export default QRCodeGenerate
