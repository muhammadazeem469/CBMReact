import React ,{useState,useEffect } from "react";
import baseURL from "../apis/restApi";
import { useNavigate } from 'react-router-dom';



const EditCompany = (id) => {

    const [companyObject, setcompanyObject] = useState()
    const navigate = useNavigate();

    useEffect(()=>{
        getInformation(id)

    },[])

    const getInformation = async (id) => {
        const response = await  baseURL.get(`/company/id/${id}`)
        setcompanyObject(response.data)
    }

    const HitApi = async (companyObject) => {
        const response = await  baseURL.put(`/company/update/${id}`,{
            "CompanyName": companyObject.CompanyName, 
            "City": companyObject.City,
            "State" : companyObject.State,
            "Description": companyObject.Description,
            "FoundedDate": companyObject.FoundedDate,
        })
 //       setresponseRequest(response)
        navigate(`/company/detail/${id}`)

        }

    return [companyObject,HitApi]


}

export default EditCompany