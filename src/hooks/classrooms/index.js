import { useFetchClassrooms } from "./fetch-data"
export const useFetchInitClassrooms = () => {
    const FetchClassrooms = useFetchClassrooms();
    return { FetchClassrooms }
}