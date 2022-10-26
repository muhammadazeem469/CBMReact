import React,{useState} from "react";
import { useForm } from "react-hook-form";


const Form = ({Heading,passingObject,HitApi,ButtonText}) => {

    const [companyObject, setCompanyObject] = useState({CompanyName: passingObject.CompanyName,City: passingObject.City,State: passingObject.State,Description:passingObject.Description, FoundedDate:passingObject.FoundedDate})
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmitForm = (data) => {
     //   console.log(data)
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
                <form data-testid="form" onSubmit={handleSubmit(onSubmitForm)} className="ui form">
                    <div className="field">
                        <label>Company Name</label>
                        <div className="ui fluid input">
                            <input 
                                name="CompanyName"
                              //  aria-invalid={errors.name ? "true" : "false"} 
                                type="text" 
                                defaultValue={companyObject.CompanyName}
                                onChange={handleChange} 
                                placeholder="Company Name"
                                data-testid="CompanyName"
                                {...register("CompanyName", { required: true})}
                             />
                        </div>
                        {errors.CompanyName && <p data-testid="ErrorName">Please check the Company Name</p>}
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
                                data-testid="City"
                                {...register("City", { required: true})}
                                />
                            </div>
                            {errors.City && <p data-testid="ErrorCity">Please check the City</p>}
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
                                    data-testid="State"
                                    {...register("State", { required: true})}
                                />
                            </div>
                            {errors.State && <p data-testid="ErrorState">Please check the State</p>}
                        </div>
                        <div className="field">
                            <label>Date</label>
                                <input
                                    type="date" 
                                    name='FoundedDate' 
                                    onChange={handleChange}
                                    defaultValue={companyObject.FoundedDate}
                                    data-testid="FoundedDate"
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
                            data-testid="Description"
                            {...register("Description", { required: true})}
                        >
                        </textarea>
                        {errors.Description && <p data-testid="ErrorDescription">Please check the Descritpion</p>}
                    </div>
                    <div className="field">
                        <button  data-testid="submit" className="ui button">{ButtonText}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

}

export default Form