import React from "react";
import "../styles/Child.css"



const Selection= ({key,applyColor})=>{
function bgColor(e){
    let target = e.target;

    target.style.backgroundColor=`${applyColor.backgroundColor}`


}
    return(
        <>

        <div onClick={bgColor}  className="select_box">

        </div>
        </>
    )
}
export default Selection

