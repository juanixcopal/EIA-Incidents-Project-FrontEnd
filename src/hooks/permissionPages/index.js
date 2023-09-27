import { useFetchPermissionPageDatosOsTicket, useFetchPermissionPageEstadisticas } from './fetch-data.js'

export const useFetchInitPermissionPages = () => {
  const FetchPermissionPageDatosOsTicket = useFetchPermissionPageDatosOsTicket()
  const FetchPermissionPageEstadisticas = useFetchPermissionPageEstadisticas()
  return {
    FetchPermissionPageDatosOsTicket,
    FetchPermissionPageEstadisticas
  }
}
