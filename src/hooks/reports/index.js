import { useFetchReports } from './fetch-data.js'

export const useFetchInitReports = () => {
    const FetchReportsData = useFetchReports()

    return { FetchReportsData }
}
