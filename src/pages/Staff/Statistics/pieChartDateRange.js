import { Grid, Typography, Input } from '@mui/material'
import { Pie } from 'react-chartjs-2'

import MainCard from 'ui-component/cards/MainCard'

import { gridSpacing } from 'store/constant'

import { useFetchInitStatistics } from 'hooks/statistics'

import Loading from 'ui-component/loading'

const PieChartDateRange = () => {
  const mainHook = useFetchInitStatistics()

  const { FetchTypeIncidencesClosedByRangeDate, formattedStartDate, formattedEndDate, setFormattedStartDate, setFormattedEndDate } = mainHook

  const { loadingTypeIncidencesClosedByRangeDate, typeIncidencesClosedByRangeDate } = FetchTypeIncidencesClosedByRangeDate

  const pieChartDataByRangeDate = {
    labels: Object.keys(typeIncidencesClosedByRangeDate),
    datasets: [
      {
        data: Object.values(typeIncidencesClosedByRangeDate),
        backgroundColor: [
          '#A2DED0',
          '#36A2EB',
          '#FFCE56',
          '#DAB7F8',
          '#D8F8B7',
          '#C9CBCF',
          '#DBAFAB',
          '#3B3E6F',
          '#EECBAD',
          '#708D81',
          '#FF6384',
          '#F8DDB7',
          '#bb73Fa',
          '#FF7F50'
        ]
      }
    ],
    options: {
      responsive: true
    }
  }

  return (
    <>
      <MainCard>
        <Loading loading={loadingTypeIncidencesClosedByRangeDate} />

        {!loadingTypeIncidencesClosedByRangeDate && (
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignContent='center' justifyContent='space-between'>
                <Grid item>
                  <Typography variant='h4'>Gráfica de pastel por rango de fecha</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container alignContent='center' justifyContent='space-between'>
                <Grid item>
                  <Typography variant='body1'>Fecha Inicio</Typography>
                  <Input type='date' value={formattedStartDate} onChange={e => setFormattedStartDate(e.target.value)} />
                </Grid>

                <Grid item>
                  <Typography variant='body1'>Fecha Fin</Typography>
                  <Input type='date' value={formattedEndDate} onChange={e => setFormattedEndDate(e.target.value)} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ pt: '16px !important' }}>
              <Grid item>
                <Grid container direction='column' spacing={1}>
                  <Grid item>
                    <Pie data={pieChartDataByRangeDate} />
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

export default PieChartDateRange
