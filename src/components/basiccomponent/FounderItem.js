import React from "react";
import '../../styles/App.css'

const FounderItem = ({Object}) => {
    return(
        <div className="five wide column"> <h4>{Object.FullName}: {Object.Title} </h4></div>
    )
}
export default FounderItem