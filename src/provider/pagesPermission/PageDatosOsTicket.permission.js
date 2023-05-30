import { useFetchInitPermissionPages } from '../../hooks/permissionPages/index'

export const PageOsTicket = () => {
  const mainHook = useFetchInitPermissionPages()

  const { FetchPermissionPageDatosOsTicket } = mainHook

  const { permissionPageOsTicket } = FetchPermissionPageDatosOsTicket

  const itemTermometro = permissionPageOsTicket.find(item => item.nombre_item === 'termometro')
  const verItemTermometro = itemTermometro ? itemTermometro.ver_item : null

  const itemTablaMesActual = permissionPageOsTicket.find(item => item.nombre_item === 'mes_actual')
  const verTablaMesActual = itemTablaMesActual ? itemTablaMesActual.ver_item : null

  const itemTablaPrimerSemestre = permissionPageOsTicket.find(item => item.nombre_item === 'primer_semestre')
  const verTablaPrimerSemestre = itemTablaPrimerSemestre ? itemTablaPrimerSemestre.ver_item : null

  const itemTablaSegundoSemestre = permissionPageOsTicket.find(item => item.nombre_item === 'segundo_semestre')
  const verTablaSegundoSemestre = itemTablaSegundoSemestre ? itemTablaSegundoSemestre.ver_item : null

  const itemTablaSemanal = permissionPageOsTicket.find(item => item.nombre_item === 'semanal')
  const verTablaSemanal = itemTablaSemanal ? itemTablaSemanal.ver_item : null

  return { verItemTermometro, verTablaMesActual, verTablaPrimerSemestre, verTablaSegundoSemestre, verTablaSemanal }
}
