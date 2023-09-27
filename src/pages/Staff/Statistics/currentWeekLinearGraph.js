import { Line } from 'react-chartjs-2'

import MainCard from 'ui-component/cards/MainCard'

import { Grid, Typography } from '@mui/material'

import { gridSpacing } from 'store/constant'

import Loading from 'ui-component/loading'

const CurrentWeekLinearGraph = ({ mainHook }) => {
  const { FetchTypeIncidencesClosedWeek } = mainHook

  const { loadingTypeIncidencesClosedWeek, typeIncidencesClosedWeek } = FetchTypeIncidencesClosedWeek

  const LineChartData = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    datasets: [
      {
        label: 'Instalación de Software',
        data: typeIncidencesClosedWeek.map(item => item.Instalacion_Software),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Impresoras',
        data: typeIncidencesClosedWeek.map(item => item.Impresoras),
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'Puesto de Trabajo',
        data: typeIncidencesClosedWeek.map(item => item.Puesto_Trabajo),
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1
      },
      {
        label: 'Aulas',
        data: typeIncidencesClosedWeek.map(item => item.Aulas),
        fill: false,
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.1
      },
      {
        label: 'Residencia',
        data: typeIncidencesClosedWeek.map(item => item.Residencia),
        fill: false,
        borderColor: 'rgb(255, 159, 64)',
        tension: 0.1
      },
      {
        label: 'Desconocimiento',
        data: typeIncidencesClosedWeek.map(item => item.Desconocimiento),
        fill: false,
        borderColor: 'rgb(255, 205, 86)',
        tension: 0.1
      },
      {
        label: 'Chromebooks',
        data: typeIncidencesClosedWeek.map(item => item.Chromebooks),
        fill: false,
        borderColor: 'rgb(56, 202, 23)',
        tension: 0.1
      },
      {
        label: 'Laboratorios de Informática',
        data: typeIncidencesClosedWeek.map(item => item.Laboratorios_informatica),
        fill: false,
        borderColor: 'rgb(150, 150, 150)',
        tension: 0.1
      },
      {
        label: 'Soporte de Eventos',
        data: typeIncidencesClosedWeek.map(item => item.Soporte_eventos),
        fill: false,
        borderColor: 'rgb(125, 67, 145)',
        tension: 0.1
      },
      {
        label: 'Internet',
        data: typeIncidencesClosedWeek.map(item => item.Internet),
        fill: false,
        borderColor: 'rgb(12, 150, 200)',
        tension: 0.1
      },
      {
        label: 'Laboratorios de Ciencias',
        data: typeIncidencesClosedWeek.map(item => item.Laboratorios_ciencias),
        fill: false,
        borderColor: 'rgb(255, 0, 0)',
        tension: 0.1
      },
      {
        label: 'Servidores',
        data: typeIncidencesClosedWeek.map(item => item.Servidores),
        fill: false,
        borderColor: 'rgb(0, 255, 0)',
        tension: 0.1
      },
      {
        label: 'Formación',
        data: typeIncidencesClosedWeek.map(item => item.Formacion),
        fill: false,
        borderColor: 'rgb(255, 192, 203)',
        tension: 0.1
      },
      {
        label: 'Desarrollo',
        data: typeIncidencesClosedWeek.map(item => item.Desarrollo),
        fill: false,
        borderColor: 'rgb(240, 128, 128)',
        tension: 0.1
      }
    ]
  }

  const options = {
    responsive: true,
    title: {
      display: true,
      text: 'Temas de ayuda cerrados de la semana'
    }
  }
  return (
    <>
      <MainCard>
        <Loading loading={loadingTypeIncidencesClosedWeek} />
        {!loadingTypeIncidencesClosedWeek && (
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignContent='center' justifyContent='space-between'>
                <Grid item>
                  <Typography variant='h4'>Gráfica lineal de la semana actual</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ pt: '16px !important' }}>
              <Grid item>
                <Line data={LineChartData} options={options} />
              </Grid>
            </Grid>
          </Grid>
        )}
      </MainCard>
    </>
  )
}

export default CurrentWeekLinearGraph
