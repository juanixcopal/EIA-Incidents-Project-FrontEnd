import { useFetchFlats } from "./fetch-data.js";
export const useFetchInitFlats = ()=>{
    const FetchFlats = useFetchFlats();
    return {FetchFlats}
}