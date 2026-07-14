import React from "react";

type Fee={
    name:string
    phone:number
    fees:number
}

function Fees(props:Fee){
    return(
      <div>
        <h1>Fees</h1>
        <p>Name:{props.name}</p>
        <p>Phone:{props.phone}</p>
        <p>Fees:{props.fees}</p>
      </div>
    )

}
export default Fees