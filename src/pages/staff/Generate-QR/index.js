import Header from '../../../components/header/Header'
import QRCodeGenerate from './components/QR-Generator'

const GenerateQR = () => {
  return (
    <>
      <Header />
      <div className='col-12 mt--8 row' style={{ paddingLeft: '6em' }}>
        <QRCodeGenerate />
      </div>
    </>
  )
}

export default GenerateQR
