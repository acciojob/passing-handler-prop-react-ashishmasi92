import React from "react";

const ColourSelector=({comfig,changeColor})=>{
let {backgroundColor} = comfig
  console.log(comfig)
  return(
    <>
   
 {
  comfig.map((v)=>{
    return (
      <button onClick={()=>{
        changeColor({backgroundColor:v.background})
      }}key={v.key} id={v.id} >{v.label}</button>
    )
  })
 }

    
    </>
  )
}

export default ColourSelector