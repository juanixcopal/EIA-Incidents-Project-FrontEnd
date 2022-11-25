import { useFetchTypeClassrooms } from './fetch-data'

export const useFetchInitTypeClassrooms = () => {
    const FetchTypeClassrooms = useFetchTypeClassrooms()
    return { FetchTypeClassrooms }
}
