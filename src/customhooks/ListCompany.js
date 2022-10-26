import {useState , useEffect} from "react";
import baseURL from "../apis/restApi";

const ListCompany = () => {

    const [companisList, setCompaniesList] = useState([])
    const [responseData, setResponsedata] = useState(null)
    useEffect(()=>{

        HitApi()

    },[])

    const HitApi = async () => {
        const response = await  baseURL.get('/company')
            setCompaniesList(response.data)
            setResponsedata(response)
        }

    return [companisList,HitApi,responseData]


}

export default ListCompany