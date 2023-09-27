import {
  Grid,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
  tableCellClasses,
  Typography,
  IconButton,
  Collapse,
  Box
} from '@mui/material'
import { useState, Fragment } from 'react'
import Loading from 'ui-component/loading'
import { gridSpacing } from 'store/constant'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const Row = props => {
  const { row } = props
  const [open, setOpen] = useState(false)

  const { ticket_id, number, created, topic, poster, body, subject, priority, priority_color } = row

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
      backgroundColor: theme.palette.grey.A400
    },
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }))

  return (
    <Fragment>
      <TableRow>
        <StyledTableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component='th' scope='row'>
          #{number}
        </StyledTableCell>
        <StyledTableCell align='center'>{created}</StyledTableCell>
        <StyledTableCell align='center'>{subject}</StyledTableCell>
        <StyledTableCell align='center'>{poster}</StyledTableCell>
        <StyledTableCell align='center' style={{ backgroundColor: priority_color }}>
          {priority}
        </StyledTableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, maxWidth: 100 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h4' gutterBottom component='div'>
                Resumen del ticket #{number}
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <StyledTableRow>
                    <TableCell>Tema de ayuda</TableCell>
                    <TableCell>Resumen</TableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={ticket_id}>
                    <TableCell component='th' scope='row'>
                      {topic}
                    </TableCell>
                    <TableCell>
                      <p style={{ fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: body }} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

const OpenTicketsData = ({ useFetchInit }) => {
  const { FetchOpenTicketsData } = useFetchInit

  const { loadingOpenTicketsData, openTicketsData } = FetchOpenTicketsData

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.grey[500],
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }))

  return (
    <>
      <Loading loading={loadingOpenTicketsData} />
      {!loadingOpenTicketsData && (
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Grid item xs={12} sx={{ pt: '16px !important' }}>
              <Grid item>
                <Grid container direction='column' spacing={1}>
                  <Grid item>
                    <TableContainer component={Paper}>
                      <Table aria-label='collapsible table'>
                        <TableHead>
                          <TableRow>
                            <StyledTableCell />
                            <StyledTableCell align='center'>Ticket</StyledTableCell>
                            <StyledTableCell align='center'>Fecha creación</StyledTableCell>
                            <StyledTableCell align='center'>Asunto</StyledTableCell>
                            <StyledTableCell align='center'>De</StyledTableCell>
                            <StyledTableCell align='center'>Prioridad</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {openTicketsData.map(item => {
                            const { ticket_id } = item

                            return <Row key={ticket_id} row={item} />
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

export default OpenTicketsData
