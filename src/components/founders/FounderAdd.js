import React,{useState} from "react";
import { useForm } from "react-hook-form";
import AddNewFounder from "../../customhooks/AddNewFounder";


const FounderAdd = ({passingObject,id}) => {
    const [founderObject, setfounderObject] = useState({FullName: passingObject.FullName,Title: passingObject.Title})
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [responseRequest,HitApi] = AddNewFounder()
    const onSubmitForm = (data) => {
        HitApi(data,id)
     }

     const handleChange = (e) => {
        setfounderObject({...founderObject, [e.target.name]: e.target.value})
       
    }

    return (

        <div className="ui active modal">
            <i className="close icon"></i>
            <div className="header">
                Add New Founder
            </div>
            <div className="content">
                <div className="description">
                    <form className="ui form" onSubmit={handleSubmit(onSubmitForm)}>
                        <div className="field">
                            <label>Full Name</label>
                            <input 
                                name="FullName"
                                placeholder="Full Name" 
                                onChange={handleChange}
                                {...register("FullName", { required: true})}
                                
                            />
                        </div>
                        {errors.FullName && <p>Please check the FUll Name</p>}
                        <div className="field">
                            <label>Title</label>
                            <input
                                name="Title" 
                                placeholder="Title" 
                                onChange={handleChange}
                                {...register("Title", { required: true})}
                            />
                        </div>
                        {errors.Title && <p>Please check the Title</p>}
                        <button className="ui button" type="submit">Add</button>
                    </form>
                </div>
            </div>
            
        </div>
        )
}


export default FounderAdd