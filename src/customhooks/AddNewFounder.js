import React ,{useState } from "react";
import baseURL from "../apis/restApi";
import { useNavigate } from 'react-router-dom';



const AddNewFounder = () => {

    const [responseRequest, setresponseRequest] = useState()
    const navigate = useNavigate();
   // console.log(companyObject)

    const HitApi = async (founderObject,id) => {
        const response = await  baseURL.post('/founder/add',{
                 "FullName":founderObject.FullName, 
                 "Title":founderObject.Title,
                 "company_id": id
        })
        setresponseRequest(response)
        window.location.reload()

        }

    return [responseRequest,HitApi]


}

export default AddNewFounder 
