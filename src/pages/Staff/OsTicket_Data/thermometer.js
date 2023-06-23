import { useFetchTickets } from '../../../hooks/osTicketData/index'
import { Grid, Typography, Card } from '@mui/material'
import '../../../styles/osTicketData/index.css'
import MainCard from 'ui-component/cards/MainCard'
import { gridSpacing } from '../../../store/constant'
import Loading from 'ui-component/loading'

const Thermometer = () => {
  const mainHook = useFetchTickets()
  const { FetchOpenTickets } = mainHook

  const { totalTickets, loading } = FetchOpenTickets

  const getTicketsColor = () => {
    if (totalTickets === 0) {
      return `hsl(${0}, 0%, 90%)`
    } else {
      const hue = (1 - newOpenTickets / 100) * 120
      return `hsl(${hue}, 100%, 50%)`
    }
  }

  const mercuryHeight = () => {
    if (totalTickets === 0) {
      return Math.min(10 * 10, 100)
    } else if (totalTickets === 1) {
      return Math.min(11 * 2, 100)
    } else if (totalTickets === 2) {
      return Math.min(12.5 * 2, 100)
    } else {
      return Math.min(totalTickets * 10, 100)
    }
  }

  const newOpenTickets = mercuryHeight()

  return (
    <MainCard>
      <Loading loading={loading} />
      {!loading && (
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Grid container alignContent='center' justifyContent='space-between'>
              <Grid item>
                <Typography variant='h4'>Termometro tickets abiertos</Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ pt: '16px !important' }}>
              <Card>
                <Grid item>
                  <div className='App'>
                    <div className='thermometer'>
                      <div className='mercury' style={{ height: `${newOpenTickets}%`, backgroundColor: getTicketsColor() }}></div>
                      <div className='thermometerBase' style={{ backgroundColor: getTicketsColor() }}></div>
                    </div>
                    <p>Tickets abiertos: {totalTickets}</p>
                  </div>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      )}
    </MainCard>
  )
}

export default Thermometer
