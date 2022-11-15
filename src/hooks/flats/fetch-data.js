import { useEffect ,useState } from "react";
import { getFlats } from "../../data/flats/get.js";

export const useFetchFlats = () =>{
    const [flats, setFlats] = useState([]);

    useEffect(()=>{
        (async()=>{
            await getFlats()
            .then(({data})=>{
                // console.log(data);
                setFlats(data)
            })
            .catch((error)=>{
                console.log('error', error);
            })
        })()
    },[])
    return {flats}
}