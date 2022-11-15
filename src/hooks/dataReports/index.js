import { useFetchReportingData } from "./fetch-data.js";

export const useFetchInitDataReports = () => {
    const FetchDataReports = useFetchReportingData();


    return {FetchDataReports}
}