import { useFetchInitPermissionPages } from '../../hooks/permissionPages/index'

export const PageEstadistica = () => {
  const mainHook = useFetchInitPermissionPages()

  const { FetchPermissionPageEstadisticas } = mainHook

  const { permissionPageEstadistica } = FetchPermissionPageEstadisticas

  const itemGraficaPastelMesActual = permissionPageEstadistica.find(item => item.nombre_item === 'pastel_mes_actual')
  const verPastelMesActual = itemGraficaPastelMesActual ? itemGraficaPastelMesActual.ver_item : null

  const itemGraficaPastelRangoFecha = permissionPageEstadistica.find(item => item.nombre_item === 'pastel_rango_fecha')
  const verPastelRangoFecha = itemGraficaPastelRangoFecha ? itemGraficaPastelRangoFecha.ver_item : null

  const itemGraficaLineaSemanal = permissionPageEstadistica.find(item => item.nombre_item === 'lineal_semanal')
  const verLinealSemanal = itemGraficaLineaSemanal ? itemGraficaLineaSemanal.ver_item : null

  const itemTablaTicketsRangoSemana = permissionPageEstadistica.find(item => item.nombre_item === 'tickets_rango_semana')
  const verTablaTicketSemana = itemTablaTicketsRangoSemana ? itemTablaTicketsRangoSemana.ver_item : null

  return { verPastelMesActual, verPastelRangoFecha, verLinealSemanal, verTablaTicketSemana }
}
