import {useState , useEffect} from "react";
import baseURL from "../apis/restApi";

const useCompany = () => {

    const [companisList, setCompaniesList] = useState([])
    useEffect(()=>{

        HitApi()

    },[])

    const HitApi = async () => {
        const response = await  baseURL.get('/')
            setCompaniesList(response.data)
        }

    return [companisList,HitApi]


}

export default useCompany