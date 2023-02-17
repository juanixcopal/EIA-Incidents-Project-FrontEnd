import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import { ModalBody, ModalFooter } from 'reactstrap'

const QrScann = ({ toggle }) => {
  const [qrscan, setQrscan] = useState('No result')
  const handleScan = data => {
    if (data) {
      setQrscan(data)
    }
  }
  const handleError = err => {
    console.error(err)
  }

  console.log(qrscan)

  return (
    <>
      <ModalBody>
        <div>
          <center>
            <div>
              <QrReader delay={3000} onError={handleError} onScan={handleScan} style={{ height: 300, width: 320 }} />
            </div>
          </center>
        </div>

        <h2 style={{ fontSize: '40px', width: '40px', height: '40px', color: 'black' }} defaultValue={qrscan} value={qrscan} />
      </ModalBody>
      <ModalFooter>
        <div className='col-12'>
          <button type='submit' className='rightButtonAccept'>
            Guardar
          </button>
          <button type='button' className='leftButtonCancel' onClick={toggle}>
            Cancelar
          </button>
        </div>
      </ModalFooter>
    </>
  )
}

export default QrScann
