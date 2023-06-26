import { Typography, styled, Grid } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { CancelButton, DeleteButton } from 'ui-component/button'

const DeleteUser = ({ useFetchInit }) => {
  const { onClose } = useFetchInit
  const StyledErrorOutlineIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
    fontSize: 90,
    color: theme.palette.warning.main,
    margin: 'auto',
    display: 'block'
  }))

  const StyledTypography = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.error.light
  }))

  return (
    <>
      <Grid container direction='row' spacing={1} sx={{ pt: '16px !important' }}>
        <Grid item>
          <StyledErrorOutlineIcon />
          <StyledTypography variant='h2' gutterBottom>
            ¿Deseas eliminar este Usuario?
          </StyledTypography>
        </Grid>
      </Grid>

      <Grid container alignContent='center' justifyContent='space-between' sx={{ pt: '16px !important' }}>
        <Grid item>
          <CancelButton disabled={false} title='Cancelar' onClick={onClose} />
        </Grid>
        <Grid item>
          <DeleteButton disabled={false} title='Eliminar' />
        </Grid>
      </Grid>
    </>
  )
}

export default DeleteUser
