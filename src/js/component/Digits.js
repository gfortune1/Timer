import React from "react"
const Digits=(props)=>{
return(
    <div className="digit"><h1>{props.time % 10}</h1></div>
)
}
export default Digits