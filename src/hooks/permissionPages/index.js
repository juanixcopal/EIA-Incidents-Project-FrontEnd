import { useFetchPermissionPageDatosOsTicket } from './fetch-data'

export const useFetchInitPermissionPages = () => {
  const FetchPermissionPageDatosOsTicket = useFetchPermissionPageDatosOsTicket()
  return {
    FetchPermissionPageDatosOsTicket
  }
}
