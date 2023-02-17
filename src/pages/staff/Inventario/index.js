import { useState } from 'react'
import Header from '../../../components/header/Header'
import { Grid, Button, Icon } from '@mui/material'
import { Link } from 'react-router-dom'
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner'
import MainModal from './modal-component/index.js'
const Inventario = () => {
  const defaultDataModal = {
    open: false,
    title: '',
    component: '',
    params: {}
  }

  const [dataModal, setDataModal] = useState(defaultDataModal)

  const toggle = (_, title, component, params) => {
    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  return (
    <>
      <Header />
      <MainModal data={dataModal} tog={toggle} />
      <div className='col-12 mt--8 row' style={{ paddingLeft: '6em' }}>
        <h1>Inventario</h1>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            {/* <Link to='/user/qr_scanner'> */}
            <Button variant='contained' color='primary' onClick={() => toggle(null, 'Scanner Qr', 'qr-scann', null)}>
              <QrCodeScannerIcon fontSize='large' />
            </Button>
            {/* </Link> */}
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Inventario
