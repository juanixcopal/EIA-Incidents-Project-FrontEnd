import { useContext } from 'react'
import { Grid, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, styled, tableCellClasses, Button, Typography } from '@mui/material'
import Loading from 'ui-component/loading'
import { gridSpacing } from 'store/constant'
import EditIcon from '@mui/icons-material/Edit'

import { AuthContext } from 'provider/global.provider'

import MainSubModal from './subModal-component'

const ViewChromebook = ({ useFetchInit }) => {
  const { authData, rolAccess } = useContext(AuthContext)

  const rol = authData.rol_usuario

  const { FetchChromebooksByArmario, FetchChromebooksActiveByCupboard, subToggle } = useFetchInit

  const { chromebooksByArmario, loadingChromebooksByArmario } = FetchChromebooksByArmario
  const { chromebooksActiveByCupboard } = FetchChromebooksActiveByCupboard

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.grey[500],
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
      <Loading loading={loadingChromebooksByArmario} />
      <MainSubModal useFetchInit={useFetchInit} />

      {!loadingChromebooksByArmario && (
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Typography color='gray'>Chromebooks Operativas: {chromebooksActiveByCupboard}</Typography>
            <Grid item xs={12} sx={{ pt: '16px !important' }}>
              <Grid item>
                <Grid container direction='column' spacing={1}>
                  <Grid item>
                    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                      <Table aria-label='simple table'>
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Chromebook #</StyledTableCell>
                            <StyledTableCell align='left'>Prod ID</StyledTableCell>
                            <StyledTableCell align='left'>SN</StyledTableCell>
                            <StyledTableCell align='left'>Estado</StyledTableCell>
                            {rolAccess[rol] && <StyledTableCell align='left'>Acciones</StyledTableCell>}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {chromebooksByArmario.map(item => {
                            const { id_chromebook, estado_chromebook, color_estado, numero_chromebook, prodid, sn } = item

                            return (
                              <StyledTableRow key={id_chromebook}>
                                <StyledTableCell>Chromebook #{numero_chromebook}</StyledTableCell>
                                <StyledTableCell>{prodid}</StyledTableCell>
                                <StyledTableCell>{sn}</StyledTableCell>
                                <StyledTableCell>
                                  <Grid item>
                                    {estado_chromebook}
                                    <span
                                      style={{
                                        background: color_estado,
                                        width: 10,
                                        height: 10,
                                        borderRadius: 50,
                                        display: 'inline-block',
                                        marginLeft: 10
                                      }}
                                    />
                                  </Grid>
                                </StyledTableCell>
                                {rol === 'superadmin' && (
                                  <StyledTableCell>
                                    <Button
                                      endIcon={<EditIcon />}
                                      color='info'
                                      onClick={() => subToggle(null, 'Editar Chromebook', 'modify-chromebook', item)}
                                    />
                                  </StyledTableCell>
                                )}
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
        </Grid>
      )}
    </>
  )
}

export default ViewChromebook
