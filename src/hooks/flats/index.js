import { useFetchFlats } from './fetch-data-mutation.js'
import { useFetchFlatsData } from './fetch-data.js'
export const useFetchInitFlats = () => {
    const FetchFlats = useFetchFlats()
    const FetchFlatsData = useFetchFlatsData()

    return { FetchFlats, FetchFlatsData }
}
