import { useFetchReports } from "./fetch-data.js";
export const useFetchInitReports = () =>{
    const FetchReports = useFetchReports();
    return {FetchReports}
}