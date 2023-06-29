import { Modal, Box, Typography } from '@mui/material'
import ModifyItemsView from './modify-items-view'
import ViewTicketsClosedByStaff from './view-closed-ticket-week-by-staff'

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

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {title}
          </Typography>
          {component === 'modify-items-view' && <ModifyItemsView useFetchInit={useFetchInit} />}
          {component === 'view-closed-ticket-by-staff-statistics' && <ViewTicketsClosedByStaff useFetchInit={useFetchInit} />}
        </Box>
      </Modal>
    </>
  )
}

export default MainModal
