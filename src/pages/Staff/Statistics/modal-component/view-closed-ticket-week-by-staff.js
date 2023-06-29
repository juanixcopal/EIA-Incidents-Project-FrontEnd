import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, styled, tableCellClasses, Grid } from '@mui/material'
import Loading from 'ui-component/loading'
import { gridSpacing } from 'store/constant'

const ViewTicketsClosedByStaff = ({ useFetchInit }) => {
  const { FetchDataTicketsByStaff } = useFetchInit

  const { dataTicketByStaff, loadingDataTicketByStaff } = FetchDataTicketsByStaff

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.grey[500],
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      WebkitFontSmoothing: 'auto'
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
      <Loading loading={loadingDataTicketByStaff} />

      {!loadingDataTicketByStaff && (
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Grid item xs={12} sx={{ pt: '16px !important' }}>
              <Grid item>
                <Grid container direction='column' spacing={1}>
                  <Grid item>
                    <TableContainer component={Paper}>
                      <Table aria-label='customized table'>
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Tema de ayuda</StyledTableCell>
                            <StyledTableCell>Total de tickets cerrados</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {dataTicketByStaff.map(item => {
                            const { help_topic, num_tickets, topic_id } = item

                            return (
                              <StyledTableRow key={topic_id}>
                                <StyledTableCell component='th' scope='row'>
                                  {help_topic}
                                </StyledTableCell>
                                <StyledTableCell align='center'>{num_tickets}</StyledTableCell>
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

export default ViewTicketsClosedByStaff
