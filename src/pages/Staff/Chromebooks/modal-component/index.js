import { Modal, Box, Typography, Divider } from '@mui/material'
import ViewChromebook from './view-chromebook'
import CreateChromebook from './create-chromebook'
import ViewCalendar from './view-calendar'

const MainModal = ({ useFetchInit }) => {
  const { dataModal, onClose } = useFetchInit
  const { open, title, component } = dataModal

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 'none',
    p: 4,
    outline: 'none',
    borderRadius: '10px'
  }

  const titleStyle = {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.9rem',
    marginBottom: '16px'
  }

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2' sx={titleStyle}>
            {title}
          </Typography>
          <Divider sx={{ marginBottom: '16px' }} />
          {component === 'view-chromebook' && <ViewChromebook useFetchInit={useFetchInit} />}
          {component === 'create-chromebook' && <CreateChromebook useFetchInit={useFetchInit} />}
          {component === 'view-calendar' && <ViewCalendar useFetchInit={useFetchInit} />}
        </Box>
      </Modal>
    </>
  )
}

export default MainModal
