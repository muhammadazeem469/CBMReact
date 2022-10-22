import React, {useState} from "react";
import FounderItem from '../basiccomponent/FounderItem'
import FounderAdd from "./FounderAdd";


const FoundersList = ({FounderList,id}) => {
    const [founderObject, setFounderObject] = useState({FullName: "",Title: ""})
    const onClick = () => {
        setIsOpen(!isOpen)
    }
    const [isOpen,setIsOpen] = useState(false)
        const renderedList = FounderList.map((Object)=>{
        return <FounderItem key={Object.id} Object={Object}/>
    })
return(
        <>
            <div className="ui fluid card fullcontainer" >
                <div className="content">
                    <div className="header ">
                        <h5 className="ui header">Founders</h5>
                    </div>
                    <div className="ui divider"></div>
                    <div className="description">
                        <div className="ui grid">
                            <div className="column twelve wide ">
                                <div className="ui grid">
                                    {renderedList}
                                </div>
                            </div>
                            <div className="column four wide ">
                                <button className="ui button" onClick={onClick}>Add Founder </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen &&<FounderAdd passingObject={founderObject} id={id} />}
        </>
    )
 }

export default FoundersList
