import React from "react";
import Form from "../basiccomponent/Form";
import {useParams} from 'react-router-dom';
import EditCompany from "../../customhooks/EditCompany";

const CompanyEdit = () => {
    const {id} = useParams()
    const [companyObject,HitApi] = EditCompany(id)
    return (<div className='ui fluid card'>
            {companyObject && <Form Heading={'Edit Company'} passingObject={companyObject}  HitApi={HitApi}/>}
        </div>)
}

export default CompanyEdit

//