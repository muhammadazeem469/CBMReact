import React ,{useState} from "react";
import baseURL from "../apis/restApi";
import { useNavigate } from 'react-router-dom';



const AddNewCompany = () => {

    const [responseRequest, setresponseRequest] = useState()
    const navigate = useNavigate();

    const HitApi = async (companyObject) => {
        const response = await  baseURL.post('/company/add',{
            "CompanyName": companyObject.CompanyName, 
            "City": companyObject.City,
            "State" : companyObject.State,
            "Description": companyObject.Description,
            "FoundedDate": companyObject.FoundedDate,
        })
        setresponseRequest(response)
        navigate(`/`)

        }

    return [responseRequest,HitApi]


}

export default AddNewCompany 
