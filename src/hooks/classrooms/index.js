import { useFetchFloors } from './fetch-data'

export const useFetchInitClassrooms = () => {
  const FetchFloors = useFetchFloors()

  return {
    FetchFloors
  }
}
