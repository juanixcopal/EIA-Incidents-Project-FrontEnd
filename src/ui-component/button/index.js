import { Button, useTheme } from '@mui/material'

import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import DeleteIcon from '@mui/icons-material/Delete'

const CancelButton = ({ disabled, onClick, title }) => {
  const theme = useTheme()

  return (
    <Button
      disabled={disabled}
      type='button'
      variant='contained'
      endIcon={<CancelIcon />}
      sx={{
        backgroundColor: theme.palette.error.main,
        '&:hover': {
          backgroundColor: theme.palette.error.dark
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
        backgroundColor: theme.palette.success.main,
        '&:hover': {
          backgroundColor: theme.palette.success.dark
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
        backgroundColor: theme.palette.info.main,
        '&:hover': {
          backgroundColor: theme.palette.info.dark
        }
      }}
    >
      {title}
    </Button>
  )
}

export { CancelButton, SaveButton, DeleteButton }
