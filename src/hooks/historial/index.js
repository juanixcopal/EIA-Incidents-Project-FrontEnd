import { useFetchIncidencesByUser } from './fetch-data'

export const useFetchInitHistorial = () => {
  const FetchIncidencesByUser = useFetchIncidencesByUser()

  return {
    FetchIncidencesByUser
  }
}
