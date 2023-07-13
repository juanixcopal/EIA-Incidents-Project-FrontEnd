import { Modal, Box, Typography, Divider } from '@mui/material'
import EditUser from './edit-user'
import DeleteUser from './delete-user'
import CreateUser from './create-user'
import UpdatePassword from './update-password'

const MainModal = ({ useFetchInit, rol }) => {
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
          <Typography variant='h6' component='h2' sx={titleStyle}>
            {title}
          </Typography>
          <Divider sx={{ marginBottom: '16px' }} />
          {component === 'edit-user-data' && <EditUser useFetchInit={useFetchInit} rol={rol} />}
          {component === 'delete-user' && <DeleteUser useFetchInit={useFetchInit} />}
          {component === 'create-user' && <CreateUser useFetchInit={useFetchInit} />}
          {component === 'update-password' && <UpdatePassword useFetchInit={useFetchInit} />}
        </Box>
      </Modal>
    </>
  )
}

export default MainModal
