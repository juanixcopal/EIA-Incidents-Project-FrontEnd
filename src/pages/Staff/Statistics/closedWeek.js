import { Grid, Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, styled, tableCellClasses, Typography, Input } from '@mui/material'

import MainCard from 'ui-component/cards/MainCard'

import { gridSpacing } from 'store/constant'

import { useFetchInitStatistics } from 'hooks/statistics'

import MainModal from './modal-component'
import Loading from 'ui-component/loading'

const ClosedWeek = () => {
  const mainHook = useFetchInitStatistics()

  const { FetchClosedTicketsCurrentWeek, toggle, handleWeekChange, selectedDate } = mainHook

  const { closedCurrentWeek, loadingClosedCurrentWeek } = FetchClosedTicketsCurrentWeek

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
        <MainModal useFetchInit={mainHook} />
        <Loading loading={loadingClosedCurrentWeek} />
        {!loadingClosedCurrentWeek && (
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignContent='center' justifyContent='space-between'>
                <Grid item>
                  <Typography variant='h4'>Tickets cerrados por semana</Typography>
                </Grid>
                <Grid item>
                  <Input type='date' onChange={handleWeekChange} value={selectedDate} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ pt: '16px !important' }}>
              <Grid item>
                <Grid container direction='column' spacing={1}>
                  <Grid item>
                    {closedCurrentWeek.length >= 1 ? (
                      <TableContainer component={Paper}>
                        <Table aria-label='customized table'>
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>Agente</StyledTableCell>
                              <StyledTableCell align='center'>Tickets cerrados</StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {closedCurrentWeek.map(item => {
                              const { firstname, lastname, semana_actual, staff_id } = item

                              return (
                                <StyledTableRow
                                  key={staff_id}
                                  style={{ cursor: 'pointer' }}
                                  onClick={() => toggle(null, 'Tickets Cerrados por el usuario', 'view-closed-ticket-by-staff-statistics', item)}
                                >
                                  <StyledTableCell component='th' scope='row'>
                                    {firstname} {lastname}
                                  </StyledTableCell>
                                  <StyledTableCell align='center'>{semana_actual}</StyledTableCell>
                                </StyledTableRow>
                              )
                            })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    ) : (
                      <div className='App'>
                        <Typography variant='subtitle2'>Aún no hay tickets cerrados esta semana</Typography>
                      </div>
                    )}
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

export default ClosedWeek
