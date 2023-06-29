import { Pie } from 'react-chartjs-2'
import { Grid, Typography } from '@mui/material'

import MainCard from 'ui-component/cards/MainCard'

import { gridSpacing } from 'store/constant'

import { useFetchInitStatistics } from 'hooks/statistics'

import Loading from 'ui-component/loading'

const PieChartCurrentMonth = () => {
  const mainHook = useFetchInitStatistics()

  const { FetchTypeIncidencesClosed } = mainHook

  const { loadingTypeIncidencesClosed, typeIncidencesClosed } = FetchTypeIncidencesClosed

  const pieChartData = {
    labels: Object.keys(typeIncidencesClosed),
    datasets: [
      {
        data: Object.values(typeIncidencesClosed),
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
          '#bb73Fa'
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
        <Loading loading={loadingTypeIncidencesClosed} />

        {!loadingTypeIncidencesClosed && (
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignContent='center' justifyContent='space-between'>
                <Grid item>
                  <Typography variant='h4'>Gráfica de pastel mes actual</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ pt: '16px !important' }}>
              <Grid item>
                <Grid container direction='column' spacing={1}>
                  <Grid item>
                    <Pie data={pieChartData} />
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

export default PieChartCurrentMonth
