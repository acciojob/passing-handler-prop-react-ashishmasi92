import React, { useState } from "react";
import Selection from "./Selection";
import ColourSelector from "./ColourSelector";


const config = [
  {
    key: "blue",
    label: "Blue",
    id: "blue-btn",
    background: "rgb(0, 0, 255)"
  },
  {
    key: "orange",
    label: "Orange",
    id: "orange-btn",
    background: "rgb(255, 189, 51)"
  }, {
    key: "red",
    label: "Red",
    id: "red-btn",
    background: "rgb(255, 87, 51 )"
  }

]




const title = 'Select the gradient and then the Box to change the color';



const App = () => {
  let [color, setColor] = useState({ backgroundColor: "" })
  return (
    <>

      <div style={{display:"flex",height:"100%", flexDirection:"column" , width:"100%", justifyContent:"center",alignItems:"center" } } >
<h2>{title}</h2>
        <div className="btn-div" style={{height:"200px", display:"flex", alignItems:"center", justifyContent:"space-evenly" }} >
          <ColourSelector
            comfig={config}
            changeColor={setColor} />
        </div>
        <div className="fix-box" style={{display:"flex", gap:"10px", justifyContent:"center", justifyContent:"space-between", width:"100%" }} >

       
       {["select1","select2","select3"].map((v)=>{
         
         return (
           <Selection key={v} applyColor={color} />
          )
        })}
        
        </div>
      </div>
    </>
  )
}
export default App