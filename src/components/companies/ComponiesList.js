import React from "react";
import '../../styles/App.css'
import CompanyItem from "../basiccomponent/CompanyItem";
import useCompany from "../../customhooks/useCompany";
import { useNavigate } from 'react-router-dom';



const CompaniesList = () => {
    const [companisList] = useCompany()
    const navigate = useNavigate();


    const renderedList = companisList.map((company)=>{
         return <CompanyItem key={company.id} company={company} />
     })
     return(
        <div className="ui fluid card fullcontainer">
            <div className="content">
                <div className="header">Companies List</div>
                <div className="meta">
                <span className="right floated time">2 days ago</span>
                <span className="category">Animals</span>
                </div>
                <div className="description">
                <div classNameName="ui relaxed divided list">
                    {renderedList}
                </div>
                </div>
            </div>
            <div className="extra content">
                <div className="right floated author">
                <button class="ui button" onClick={() => {navigate(`/company/new`)}}>
                    Add Company
                </button>
                </div>
            </div>
            </div>
        
        )
 }

export default CompaniesList