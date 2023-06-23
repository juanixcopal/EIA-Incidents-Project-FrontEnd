import { Modal, Box, Typography } from '@mui/material'
import ModifyChromebook from './modify-chromebook'

const MainSubModal = ({ useFetchInit }) => {
  const { dataSubModal, subOnClose } = useFetchInit

  const { subOpen, subTitle, subComponent } = dataSubModal

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

  return (
    <>
      <Modal open={subOpen} onClose={subOnClose}>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {subTitle}
          </Typography>
          {subComponent === 'modify-chromebook' && <ModifyChromebook useFetchInit={useFetchInit} />}
        </Box>
      </Modal>
    </>
  )
}

export default MainSubModal
