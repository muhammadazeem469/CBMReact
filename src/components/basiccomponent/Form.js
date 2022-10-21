import React,{useState} from "react";
import { useForm } from "react-hook-form";


const Form = ({Heading,passingObject,HitApi}) => {

    const [companyObject, setCompanyObject] = useState({CompanyName: passingObject.CompanyName,City: passingObject.City,State: passingObject.State,Description:passingObject.Description, FoundedDate:passingObject.FoundedDate})
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmitForm = (data) => {
        console.log(data)
        HitApi(data)
     }

    const handleChange = (e) => {
        setCompanyObject({...companyObject, [e.target.name]: e.target.value})
       
   }

   return (
    <div className='ui fluid card'>
        <div className="content">
            <div className="header">
                 <h2 className="">{Heading}</h2> 
            </div>
            <h3 className='ui divider'>
            </h3>
            <div className="description">
                <form onSubmit={handleSubmit(onSubmitForm)} className="ui form">
                    <div className="field">
                        <label>Company Name</label>
                        <div className="ui fluid input">
                            <input 
                                name="CompanyName"
                                aria-invalid={errors.name ? "true" : "false"} 
                                type="text" 
                                defaultValue={companyObject.CompanyName}
                                onChange={handleChange} 
                                placeholder="Company Name"
                                {...register("CompanyName", { required: true})}
                             />
                        </div>
                        {errors.CompanyName && <p>Please check the First Name</p>}
                    </div>
                    <div className="equal width fields">
                        <div className="field">
                            <label>City</label>
                            <div className="ui fluid input">
                                <input 
                                type="text" 
                                defaultValue={companyObject.City}
                                name="City" 
                                onChange={handleChange} 
                                placeholder="City"
                                {...register("City", { required: true})}
                                />
                            </div>
                            {errors.CompanyName && <p>Please check the First Name</p>}
                        </div>
                        <div className="field">
                            <label>State</label>
                            <div className="ui fluid input">
                                <input 
                                    type="text" 
                                    name="State" 
                                    defaultValue={companyObject.State}
                                    onChange={handleChange}  
                                    placeholder="State"
                                    {...register("State", { required: true})}
                                />
                            </div>
                            {errors.CompanyName && <p>Please check the First Name</p>}
                        </div>
                        <div className="field">
                            <label>Date</label>
                                <input 
                                    type="date" 
                                    name='FoundedDate' 
                                    onChange={handleChange}
                                    defaultValue={companyObject.FoundedDate}
                                    {...register("FoundedDate", { required: false})} 
                                />
                        </div>
                    </div>
                    <div className="field">
                        <label>Descritpion</label>
                        <textarea 
                            name="Description" 
                            defaultValue={companyObject.Description}
                            onChange={handleChange} 
                            placeholder="Description" 
                            rows="3"
                            {...register("Description", { required: true})}
                        >
                        </textarea>
                        {errors.CompanyName && <p>Please check the Descritpion</p>}
                    </div>
                    <div className="field">
                        <button  id="form-button-control-public" className="ui button">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

}

export default Form