import { Grid, Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, styled, tableCellClasses, Typography, Card } from '@mui/material'
import { gridSpacing } from '../../../store/constant'
import MainCard from 'ui-component/cards/MainCard'
import Loading from 'ui-component/loading'

const ClosedCurrentMonth = ({ mainHook }) => {
  const { FetchClosedTicketsCurrentMonth } = mainHook

  const { closedCurrentMonth, loadingClosedCurrentMonth } = FetchClosedTicketsCurrentMonth

  const date = new Date()
  const currentMonth = date.toLocaleString('default', { month: 'long' }).replace(/^\w/, c => c.toUpperCase())

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
        <Loading loading={loadingClosedCurrentMonth} />

        {!loadingClosedCurrentMonth && (
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignContent='center' justifyContent='space-between'>
                <Grid item>
                  <Typography variant='h4'>Tickets cerrados del mes: {currentMonth}</Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sx={{ pt: '16px !important' }}>
                <Card>
                  <Grid item>
                    <Grid container direction='column' spacing={1}>
                      <Grid item>
                        {closedCurrentMonth.length >= 1 ? (
                          <TableContainer component={Paper}>
                            <Table aria-label='customized table'>
                              <TableHead>
                                <TableRow>
                                  <StyledTableCell>Agente</StyledTableCell>
                                  <StyledTableCell>Tickets cerrados</StyledTableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {closedCurrentMonth.map(item => {
                                  const { firstname, lastname, mes_actual, staff_id } = item

                                  return (
                                    <StyledTableRow key={staff_id}>
                                      <StyledTableCell component='th' scope='row'>
                                        {firstname} {lastname}
                                      </StyledTableCell>
                                      <StyledTableCell align='center'>{mes_actual}</StyledTableCell>
                                    </StyledTableRow>
                                  )
                                })}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        ) : (
                          <div className='App'>
                            <Typography variant='subtitle2'>Aún no hay tickets cerrados este mes ({currentMonth})</Typography>
                          </div>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        )}
      </MainCard>
    </>
  )
}

export default ClosedCurrentMonth
