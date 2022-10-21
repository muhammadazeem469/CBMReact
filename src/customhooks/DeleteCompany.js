import React from "react";
import baseURL from "../apis/restApi";
import { useNavigate } from 'react-router-dom';




const DeleteCompany = (id) => {

    const navigate = useNavigate();


    const HitApi = async () => {
        const response = await  baseURL.delete(`/delete/${id}`)
 //       setresponseRequest(response)
        navigate(`/`)

        }

    return [HitApi]


}

export default DeleteCompany