import { Grid, Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, styled, tableCellClasses, Typography, Card } from '@mui/material'
import { useFetchTickets } from '../../../hooks/osTicketData/index'
import { gridSpacing } from '../../../store/constant'
import MainCard from 'ui-component/cards/MainCard'
import Loading from 'ui-component/loading'

const ClosedFirstSemester = () => {
  const mainHook = useFetchTickets()
  const { FetchClosedTicketsFirstSemester } = mainHook
  const { closedTicketsFirstSemester, loadingClosedTicketsFirstSemester } = FetchClosedTicketsFirstSemester

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
        <Loading loading={loadingClosedTicketsFirstSemester} />
        {!loadingClosedTicketsFirstSemester && (
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignContent='center' justifyContent='space-between'>
                <Grid item>
                  <Typography variant='h4'>Tickets cerrados primer semestre</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ pt: '16px !important' }}>
              <Card>
                <Grid item>
                  <Grid container direction='column' spacing={1}>
                    <Grid item>
                      {closedTicketsFirstSemester.length >= 1 ? (
                        <TableContainer component={Paper}>
                          <Table aria-label='customized table'>
                            <TableHead>
                              <TableRow>
                                <StyledTableCell>Agente</StyledTableCell>
                                <StyledTableCell align='center'>Tickets cerrados</StyledTableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {closedTicketsFirstSemester.map(item => {
                                const { firstname, lastname, primer_cuatri, staff_id } = item

                                return (
                                  <StyledTableRow key={staff_id}>
                                    <StyledTableCell component='th' scope='row'>
                                      {firstname} {lastname}
                                    </StyledTableCell>
                                    <StyledTableCell align='center'>{primer_cuatri}</StyledTableCell>
                                  </StyledTableRow>
                                )
                              })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      ) : (
                        <div className='App'>
                          <Typography variant='subtitle2'>Aún no hay tickets cerrados del primer semestre</Typography>
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

export default ClosedFirstSemester
