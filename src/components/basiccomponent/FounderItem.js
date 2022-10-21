import React from "react";

const FounderItem = ({Object}) => {
    return(
        <div className="four wide column"> {Object.FullName}: {Object.Title} </div>
    )
}
export default FounderItem