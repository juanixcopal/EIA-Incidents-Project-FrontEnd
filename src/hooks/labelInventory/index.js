import { useFetchIdentifierUEAA } from './fetch-data'

export const useFetchInitLabelInventory = () => {
  const FetchIdentifierUEAA = useFetchIdentifierUEAA()

  return {
    FetchIdentifierUEAA
  }
}
