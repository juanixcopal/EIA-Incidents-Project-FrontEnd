import { Grid, Button } from '@mui/material'
import { gridSpacing } from 'store/constant'
import { useContext, useState, useEffect } from 'react'

import Thermometer from './thermometer'
import ClosedCurrentMonth from './closedCurrentMonth'
import ClosedCurrentWeek from './closedCurrentWeek'
import ClosedFirstSemester from './closedFirstSemester'
import ClosedSecondSemester from './closedSecondSemester'

import Loading from 'ui-component/loading'

import MainModal from './modal-component'

import CreateIcon from '@mui/icons-material/Create'

import { useFetchTickets } from '../../../hooks/osTicketData/index'
import { AuthContext } from 'provider/global.provider'

const DashboardPage = () => {
  const { authData, rolAccess } = useContext(AuthContext)

  const mainHook = useFetchTickets()

  const { FetchPermissionPageDatosOsTicket, toggle } = mainHook

  const { permissionPageOsTicket, loadingPermissionItems } = FetchPermissionPageDatosOsTicket

  const itemTermometro = permissionPageOsTicket.find(item => item.nombre_item === 'termometro')
  const verItemTermometro = itemTermometro ? itemTermometro.ver_item : null

  const itemTablaMesActual = permissionPageOsTicket.find(item => item.nombre_item === 'mes_actual')
  const verTablaMesActual = itemTablaMesActual ? itemTablaMesActual.ver_item : null

  const itemTablaPrimerSemestre = permissionPageOsTicket.find(item => item.nombre_item === 'primer_semestre')
  const verTablaPrimerSemestre = itemTablaPrimerSemestre ? itemTablaPrimerSemestre.ver_item : null

  const itemTablaSegundoSemestre = permissionPageOsTicket.find(item => item.nombre_item === 'segundo_semestre')
  const verTablaSegundoSemestre = itemTablaSegundoSemestre ? itemTablaSegundoSemestre.ver_item : null

  const itemTablaSemanal = permissionPageOsTicket.find(item => item.nombre_item === 'semanal')
  const verTablaSemanaActual = itemTablaSemanal ? itemTablaSemanal.ver_item : null

  const rol = authData.rol_usuario

  const [visibleElements, setVisibleElements] = useState(0)

  useEffect(() => {
    let count = 0
    if (verItemTermometro === 1) count++
    if (verTablaMesActual === 1) count++
    if (verTablaSemanaActual === 1) count++
    if (verTablaPrimerSemestre === 1) count++
    if (verTablaSegundoSemestre === 1) count++
    setVisibleElements(count)
  }, [verItemTermometro, verTablaMesActual, verTablaSemanaActual, verTablaPrimerSemestre, verTablaSegundoSemestre])

  const calculateGridSizes = () => {
    switch (visibleElements) {
      case 1:
        return { lg: 12, md: 12, sm: 12, xs: 12 }
      case 2:
        return { lg: 6, md: 6, sm: 6, xs: 12 }
      case 3:
        return { lg: 4, md: 6, sm: 6, xs: 12 }
      case 4:
        return { lg: 3, md: 4, sm: 6, xs: 12 }
      case 5:
        return { lg: 3, md: 3, sm: 4, xs: 12 }
      default:
        return { lg: 12, md: 12, sm: 12, xs: 12 }
    }
  }

  return (
    <>
      <MainModal useFetchInit={mainHook} />
      <Loading loading={loadingPermissionItems} />

      {!loadingPermissionItems && (
        <Grid container spacing={gridSpacing}>
          {rolAccess[rol] && (
            <Grid item xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Grid container alignContent='center' justifyContent='space-between' sx={{ pb: '16px !important' }}>
                    <Grid item>
                      <Button variant='contained' endIcon={<CreateIcon />} color='inherit' onClick={() => toggle(null, 'Modificar vista', 'modify-items-view')}>
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
              {verItemTermometro === 1 && (
                <Grid item {...calculateGridSizes()}>
                  <Thermometer mainHook={mainHook} />
                </Grid>
              )}

              {verTablaMesActual === 1 && (
                <Grid item {...calculateGridSizes()}>
                  <ClosedCurrentMonth mainHook={mainHook} />
                </Grid>
              )}

              {verTablaSemanaActual === 1 && (
                <Grid item {...calculateGridSizes()}>
                  <ClosedCurrentWeek mainHook={mainHook} />
                </Grid>
              )}

              {verTablaPrimerSemestre === 1 && (
                <Grid item {...calculateGridSizes()}>
                  <ClosedFirstSemester mainHook={mainHook} />
                </Grid>
              )}

              {verTablaSegundoSemestre === 1 && (
                <Grid item {...calculateGridSizes()}>
                  <ClosedSecondSemester mainHook={mainHook} />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default DashboardPage
