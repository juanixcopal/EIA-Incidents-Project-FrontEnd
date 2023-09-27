import {
  Grid,
  Typography,
  styled,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  TableContainer,
  tableCellClasses,
  Tooltip,
  Box,
  IconButton
} from '@mui/material'

import { gridSpacing } from 'store/constant'
import MainCard from 'ui-component/cards/MainCard'
import Loading from 'ui-component/loading'

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import LockClockIcon from '@mui/icons-material/LockClock'

const SuperAdminTable = ({ rol, mainHook }) => {
  const { FetchAllSuperadmins, toggle } = mainHook

  const { superadmins, loadingSuperadmins } = FetchAllSuperadmins

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }))
  return (
    <>
      <MainCard>
        <Loading loading={loadingSuperadmins} />
        {!loadingSuperadmins && (
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignContent='center' justifyContent='space-between'>
                <Grid item>
                  <Typography variant='h4'>Superadmins</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ pt: '16px !important' }}>
              <Grid item>
                <Grid container direction='column' spacing={1}>
                  <Grid item>
                    <TableContainer component={Paper}>
                      <Table aria-label='customized table'>
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Usuario</StyledTableCell>
                            <StyledTableCell align='center'>Rol</StyledTableCell>
                            <StyledTableCell align='center'>Acciones</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {superadmins.map(item => {
                            const { id_user, rol_usuario, username } = item

                            return (
                              <StyledTableRow key={id_user}>
                                <StyledTableCell component='th' scope='row'>
                                  {username}
                                </StyledTableCell>
                                <StyledTableCell align='center'>{rol_usuario}</StyledTableCell>
                                <StyledTableCell align='center'>
                                  <Box>
                                    <Tooltip title='Editar datos de usuario'>
                                      <IconButton color='inherit' onClick={() => toggle(null, 'Editar datos de usuario', 'edit-user-data', item)}>
                                        <EditIcon />
                                      </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Eliminar usuario'>
                                      <IconButton color='error' onClick={() => toggle(null, 'Eliminar usuario', 'delete-user', item)}>
                                        <DeleteIcon />
                                      </IconButton>
                                    </Tooltip>
                                    {rol === 'superadmin' && (
                                      <Tooltip title='Cambiar contraseña'>
                                        <IconButton color='secondary' onClick={() => toggle(null, 'Actualizar contraseña de usuario', 'update-password', item)}>
                                          <LockClockIcon />
                                        </IconButton>
                                      </Tooltip>
                                    )}
                                  </Box>
                                </StyledTableCell>
                              </StyledTableRow>
                            )
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </MainCard>
    </>
  )
}

export default SuperAdminTable
