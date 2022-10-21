import React, {useState} from "react";
import FounderItem from '../basiccomponent/FounderItem'
import FounderCreate from "./FounderCreate";


const FoundersList = ({FounderList,id}) => {
    const [founderObject, setfounderObject] = useState({FullName: "",Title: ""})
    const [isOpen,setIsOpen] = useState(false)
        const renderedList = FounderList.map((Object)=>{
        return <FounderItem key={Object.id} Object={Object}/>
    })
return(
        <>
            <div className="ui fluid card fullcontainer" >
                <div className="content">
                    <div className="header ">
                        <h5 className="ui header">title</h5>
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
                                <button className="ui button" onClick={()=>{setIsOpen(!isOpen)}}>Add Founder </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen &&<FounderCreate passingObject={founderObject} id={id} />}
        </>
    )
 }

export default FoundersList









/*
    const renderedList = List.map((Object)=>{
         return <div key={Object.id} className="four wide column"> {Object.FullName}: {Object.Title} </div>
     })
     return<div><CardComponent title={"Founders"} renderedList={renderedList} CreatFounder={FounderCreate}/></div>
 */