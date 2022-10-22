import {useState , useEffect} from "react";
import baseURL from "../apis/restApi";

const ListCompany = () => {

    const [companisList, setCompaniesList] = useState([])
    useEffect(()=>{

        HitApi()

    },[])

    const HitApi = async () => {
        const response = await  baseURL.get('/company')
            setCompaniesList(response.data)
        }

    return [companisList,HitApi]


}

export default ListCompany