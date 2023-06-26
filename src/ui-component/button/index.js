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
        backgroundColor: theme.palette.error.dark,
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
        backgroundColor: theme.palette.success.dark,
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
        backgroundColor: theme.palette.warning.dark,
        '&:hover': {
          backgroundColor: theme.palette.warning.main
        }
      }}
    >
      {title}
    </Button>
  )
}

export { CancelButton, SaveButton, DeleteButton }
