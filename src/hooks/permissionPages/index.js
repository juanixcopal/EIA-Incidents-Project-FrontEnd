import { useFetchPermissionPageDatosOsTicket, useFetchPermissionPageEstadisticas } from './fetch-data'

export const useFetchInitPermissionPages = () => {
  const FetchPermissionPageDatosOsTicket = useFetchPermissionPageDatosOsTicket()
  const FetchPermissionPageEstadisticas = useFetchPermissionPageEstadisticas()
  return {
    FetchPermissionPageDatosOsTicket,
    FetchPermissionPageEstadisticas
  }
}
