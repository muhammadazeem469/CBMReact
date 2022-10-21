import React,{useState} from "react";
import '../../styles/App.css'
import {useParams} from 'react-router-dom';
import EditCompany from "../../customhooks/EditCompany";
import DeleteCompany from "../../customhooks/DeleteCompany";
import { useNavigate } from 'react-router-dom';
import FoundersList from "../founders/FoundersList";

const CompanyShow = () => {
    const {id} = useParams()
    const [companyObject] = EditCompany(id)
    const [HitApi] = DeleteCompany(id)
    const navigate = useNavigate();



    const onEdit = () => {
        navigate(`/company/edit/${companyObject.id}`)
    }
    const onDelete = () => {
        HitApi(id)
    }
    

    return (
        <div className="ui fluid card fullcontainer" >
           {companyObject && <div className="content">
                <div className="header ui center aligned header">
                    <h2 className="ui header">{companyObject.CompanyName}</h2>
                </div>
                <div className="ui divider"></div>
                <div className=""></div>
                <div className="ui subheader">
                    <div className="ui equal width grid">
                        <div className="column">
                            <div className=""></div>
                        </div>
                        <div className="eight wide column">
                            <div className="ui equal width grid">
                                <div className="column">
                                    <div className="ui right floated">
                                        <h3>{companyObject.FoundedDate}</h3>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="ui center floated">
                                        <h3>{companyObject.City} {companyObject.State}</h3>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="ui equal width grid">
                                        <button className="ui primary button" onClick={onEdit}>
                                            Edit
                                        </button>
                                        <button className="ui secondary button" onClick={onDelete}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="column">
                            <div className=""></div>
                        </div>
                    </div>
                </div>
                
                <div className="description">
                    <div className="paragraph">
                        <p className="controltextflow centerText">
                            {companyObject.Description}
                        </p>
                    </div>

                    <FoundersList FounderList={companyObject.Founders} id={id} />
                    
                </div>
            </div>}
        </div>
    
        )
}

export default CompanyShow

//<FoundersList title={"Founders"} List={companyObject.Founders} />


