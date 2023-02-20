import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import Sound from '../../../../audio/ScannSound.mp3'

const QrScann = ({ onScan }) => {
  const [qrData, setQrData] = useState(null)
  const audio = new Audio(Sound)

  const handleScan = data => {
    if (data) {
      // audio.play()

      setQrData(data)
      onScan(JSON.parse(data))
    }
  }

  const handleError = err => {
    console.error(err)
  }

  return <QrReader delay={3000} onError={handleError} onScan={handleScan} style={{ height: 300, width: 320 }} />
}

export default QrScann
