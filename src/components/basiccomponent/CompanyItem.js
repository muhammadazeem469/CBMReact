import React from "react";
import '../../styles/App.css'
import { useNavigate } from 'react-router-dom';

const CompanyItem = ({company}) => {
    const navigate = useNavigate();
    const onNavigation = () => {
        navigate(`/company/detail/${company.id}`)
    }
    
    return(
        <div className="ui fluid card " >
            <div className="content">
                <div className="header">
                    <div className="ui grid">
                        <div className="three column row">
                            <div className="6 wide column">{company.CompanyName}</div>
                            <div className="6 wide column">| {company.City} {company.State}</div>
                            <div className="3 wide column">
                                <div onClick={onNavigation} className="ui item right floated">
                                    <button class="ui primary basic button">Detail</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                    <div className="description">
                        <div className="paragraph">
                            <p className="controltextflow">
                                {company.Description}
                           </p>
                        </div> 
                        
                    </div>
            </div>
        </div>
    )
}

export default CompanyItem