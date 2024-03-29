import { Grid, Button } from '@mui/material'
import { gridSpacing } from 'store/constant'
import { useContext, useState, useEffect } from 'react'
import { useTheme } from '@emotion/react'

import PieChartCurrentMonth from './pieChartCurrentMonth'
import PieChartDateRange from './pieChartDateRange'
import CurrentWeekLinearGraph from './currentWeekLinearGraph'
import ClosedWeek from './closedWeek'
import ClosedTicketsDataByRange from './closedTicketDataByRange'

import MainModal from './modal-component'

import Loading from 'ui-component/loading'

import CreateIcon from '@mui/icons-material/Create'

import { useFetchInitStatistics } from 'hooks/statistics'

import { AuthContext } from 'provider/global.provider'

const StatisticsPage = () => {
  const theme = useTheme()

  const [visibleElements, setVisibleElements] = useState(0)

  const { authData, rolAccess } = useContext(AuthContext)

  const rol = authData.rol_usuario

  const mainHook = useFetchInitStatistics()

  const { FetchPermissionPageEstadisticas, toggle } = mainHook

  const { loadingPermission, permissionPageEstadistica } = FetchPermissionPageEstadisticas

  const itemGraficaPastelMesActual = permissionPageEstadistica.find(item => item.nombre_item === 'pastel_mes_actual')
  const verPastelMesActual = itemGraficaPastelMesActual ? itemGraficaPastelMesActual.ver_item : null

  const itemGraficaPastelRangoFecha = permissionPageEstadistica.find(item => item.nombre_item === 'pastel_rango_fecha')
  const verPastelRangoFecha = itemGraficaPastelRangoFecha ? itemGraficaPastelRangoFecha.ver_item : null

  const itemGraficaLineaSemanal = permissionPageEstadistica.find(item => item.nombre_item === 'lineal_semanal')
  const verLinealSemanal = itemGraficaLineaSemanal ? itemGraficaLineaSemanal.ver_item : null

  const itemTablaTicketsRangoSemana = permissionPageEstadistica.find(item => item.nombre_item === 'tickets_rango_semana')
  const verTablaTicketSemana = itemTablaTicketsRangoSemana ? itemTablaTicketsRangoSemana.ver_item : null

  const itemTablaTicketsRangoFecha = permissionPageEstadistica.find(item => item.nombre_item === 'tickets_rango_fecha')
  const verTablaTicketsRangoFecha = itemTablaTicketsRangoFecha ? itemTablaTicketsRangoFecha.ver_item : null

  useEffect(() => {
    let count = 0
    if (verPastelMesActual === 1) count++
    if (verPastelRangoFecha === 1) count++
    if (verLinealSemanal === 1) count++
    if (verTablaTicketSemana === 1) count++
    if (verTablaTicketsRangoFecha === 1) count++
    setVisibleElements(count)
  }, [verPastelMesActual, verPastelRangoFecha, verLinealSemanal, verTablaTicketSemana, verTablaTicketsRangoFecha])

  const calculateGridSizes = () => {
    switch (visibleElements) {
      case 1:
        return { lg: 12, md: 12, sm: 12, xs: 12 }
      case 2:
        return { lg: 6, md: 6, sm: 6, xs: 12 }
      case 3:
        return { lg: 6, md: 6, sm: 6, xs: 12 }
      case 4:
        return { lg: 6, md: 6, sm: 6, xs: 12 }
      case 5:
        return { lg: 6, md: 6, sm: 6, xs: 12 }
      default:
        return { lg: 12, md: 12, sm: 12, xs: 12 }
    }
  }

  return (
    <>
      <MainModal useFetchInit={mainHook} />
      <Loading loading={loadingPermission} />

      {!loadingPermission && (
        <Grid container spacing={gridSpacing}>
          {rolAccess[rol] && (
            <Grid item xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Grid container alignContent='center' justifyContent='space-between' sx={{ pb: '16px !important' }}>
                    <Grid item>
                      <Button
                        variant='contained'
                        startIcon={<CreateIcon />}
                        style={{ background: theme.palette.primary.main }}
                        onClick={() => toggle(null, 'Modificar vista', 'modify-items-view')}
                      >
                        Administrar la vista
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
              {verPastelMesActual === 1 && (
                <Grid item {...calculateGridSizes()}>
                  <PieChartCurrentMonth mainHook={mainHook} />
                </Grid>
              )}

              {verPastelRangoFecha === 1 && (
                <Grid item {...calculateGridSizes()}>
                  <PieChartDateRange mainHook={mainHook} />
                </Grid>
              )}

              {verLinealSemanal === 1 && (
                <Grid item {...calculateGridSizes()}>
                  <CurrentWeekLinearGraph mainHook={mainHook} />
                </Grid>
              )}

              {verTablaTicketSemana === 1 && (
                <Grid item {...calculateGridSizes()}>
                  <ClosedWeek mainHook={mainHook} />
                </Grid>
              )}

              {verTablaTicketsRangoFecha === 1 && (
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <ClosedTicketsDataByRange mainHook={mainHook} />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default StatisticsPage
