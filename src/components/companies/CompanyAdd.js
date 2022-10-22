import '../../styles/App.css'
import React,{useState,} from "react";
import Form from '../basiccomponent/Form';
import  AddNewCompany  from '../../customhooks/AddNewCompany'

const CompanyAdd = () => {
 
    const [companyObject, setCompanyObject] = useState({CompanyName: "",City: "",State: "",Description:"", FoundedDate:""})
    const [responseRequest,HitApi] = AddNewCompany(companyObject)
    
    
    return (
        <div className='ui fluid card'>
           <Form Heading={'Create A New Company'} passingObject={companyObject} HitApi={HitApi} ButtonText={'Add'}/>
        </div>
    )
}

export default CompanyAdd



