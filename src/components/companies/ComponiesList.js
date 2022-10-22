import React from "react";
import '../../styles/App.css'
import CompanyItem from "../basiccomponent/CompanyItem";
import ListCompany from "../../customhooks/ListCompany";
import { useNavigate } from 'react-router-dom';



const CompaniesList = () => {
    const [companisList] = ListCompany()
    const navigate = useNavigate();


    const renderedList = companisList.map((company)=>{
         return <CompanyItem key={company.id} company={company} />
     })
     const onClick = () => {
        navigate(`/company/add`)
     }
     return(
        <div className="ui fluid card fullcontainer">
            <div className="content">
                <div className="header">Companies List</div>
                <div className="meta">
                <span className="right floated time"></span>
                <span className="category"></span>
                </div>
                <div className="description">
                <div className="ui relaxed divided list">
                    {renderedList}
                </div>
                </div>
            </div>
            <div className="extra content">
                <div className="right floated author">
                <button className="ui button" onClick={onClick}>
                    Add Company
                </button>
                </div>
            </div>
        </div>
        
        )
 }

export default CompaniesList