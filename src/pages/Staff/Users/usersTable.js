import { Grid, Typography, styled, Paper, TableHead, TableRow, TableCell, TableBody, Table, TableContainer, tableCellClasses, Button } from '@mui/material'
import { gridSpacing } from 'store/constant'
import MainCard from 'ui-component/cards/MainCard'
import Loading from 'ui-component/loading'

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import MainModal from './modal-component'

import { useFetchInitUsers } from 'hooks/users'

const UsersTable = () => {
  const mainHook = useFetchInitUsers()
  const { FetchAllUsers, toggle } = mainHook

  const { users, loadingUsers } = FetchAllUsers

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
      <MainModal useFetchInit={mainHook} />
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <MainCard>
          <Loading loading={loadingUsers} />

          {!loadingUsers && (
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container alignContent='center' justifyContent='space-between'>
                  <Grid item>
                    <Typography variant='h4'>Usuarios activos en la plataforma</Typography>
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
                            {users.map(item => {
                              const { id_user, rol_usuario, username } = item

                              return (
                                <StyledTableRow key={id_user}>
                                  <StyledTableCell component='th' scope='row'>
                                    {username}
                                  </StyledTableCell>
                                  <StyledTableCell align='center'>{rol_usuario}</StyledTableCell>
                                  <StyledTableCell align='center'>
                                    <Button
                                      endIcon={<EditIcon />}
                                      color='inherit'
                                      onClick={() => toggle(null, 'Editar datos de usuario', 'edit-user-data', item)}
                                    />
                                    <Button startIcon={<DeleteIcon />} color='inherit' onClick={() => toggle(null, 'Eliminar usuario', 'delete-user', item)} />
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
      </Grid>
    </>
  )
}

export default UsersTable
