import { Button, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const CancelButton = ({ disabled, onClick, title }) => {
  const theme = useTheme()

  return (
    <Button
      disabled={disabled}
      type='button'
      variant='contained'
      endIcon={<CancelIcon />}
      sx={{
        backgroundColor: theme.palette.error[500],
        '&:hover': {
          backgroundColor: theme.palette.error.main
        }
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  )
}

const SaveButton = ({ disabled, title }) => {
  const theme = useTheme()

  return (
    <Button
      disabled={disabled}
      type='submit'
      variant='contained'
      startIcon={<SaveIcon />}
      sx={{
        backgroundColor: theme.palette.success[500],
        '&:hover': {
          backgroundColor: theme.palette.success.main
        }
      }}
    >
      {title}
    </Button>
  )
}

const DeleteButton = ({ disabled, title }) => {
  const theme = useTheme()

  return (
    <Button
      disabled={disabled}
      type='submit'
      variant='contained'
      startIcon={<DeleteIcon />}
      sx={{
        backgroundColor: theme.palette.informative[500],
        '&:hover': {
          backgroundColor: theme.palette.informative.main
        }
      }}
    >
      {title}
    </Button>
  )
}

const ButtonReturn = () => {
  const theme = useTheme()

  return (
    <Link to='/inventario'>
      <Button variant='contained' style={{ background: theme.palette.primary.main }}>
        <ArrowBackIcon />
      </Button>
    </Link>
  )
}

export { CancelButton, SaveButton, DeleteButton, ButtonReturn }
