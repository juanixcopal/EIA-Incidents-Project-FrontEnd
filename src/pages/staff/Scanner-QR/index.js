import Header from '../../../components/header/Header'
import CreateRegister from './components/Create-Register'
const ScannerQR = () => {
  return (
    <>
      <Header />
      <div className='mt--8 row' style={{ paddingLeft: '6em' }}>
        <CreateRegister />
      </div>
    </>
  )
}

export default ScannerQR
