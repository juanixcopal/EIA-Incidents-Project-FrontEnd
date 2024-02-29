import { Grid, Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, styled, tableCellClasses, Typography, Card } from '@mui/material'
import { gridSpacing } from '../../../store/constant'
import MainCard from 'ui-component/cards/MainCard'
import Loading from 'ui-component/loading'

const ClosedSecondSemester = ({ mainHook }) => {
  const { FetchClosedTicketsSecondSemester } = mainHook

  const { closedTicketsSecondSemester, loadingClosedTicketsSecondSemester } = FetchClosedTicketsSecondSemester

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary[800],
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
        <Loading loading={loadingClosedTicketsSecondSemester} />
        {!loadingClosedTicketsSecondSemester && (
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignContent='center' justifyContent='space-between'>
                <Grid item>
                  <Typography variant='h4'>Tickets cerrados segundo semestre</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ pt: '16px !important' }}>
              <Card>
                <Grid item>
                  <Grid container direction='column' spacing={1}>
                    <Grid item>
                      {closedTicketsSecondSemester.length >= 1 ? (
                        <TableContainer component={Paper}>
                          <Table aria-label='customized table'>
                            <TableHead>
                              <TableRow>
                                <StyledTableCell>Agente</StyledTableCell>
                                <StyledTableCell align='center'>Tickets cerrados</StyledTableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {closedTicketsSecondSemester.map(item => {
                                const { firstname, lastname, segundo_cuatri, staff_id } = item

                                return (
                                  <StyledTableRow key={staff_id}>
                                    <StyledTableCell component='th' scope='row'>
                                      {firstname} {lastname}
                                    </StyledTableCell>
                                    <StyledTableCell align='center'>{segundo_cuatri}</StyledTableCell>
                                  </StyledTableRow>
                                )
                              })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      ) : (
                        <div className='App'>
                          <Typography variant='subtitle2'>Aún no hay tickets cerrados del segundo semestre</Typography>
                        </div>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        )}
      </MainCard>
    </>
  )
}

export default ClosedSecondSemester
