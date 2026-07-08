import React from "react";

type marks={
    name:string;
    subject:string;
    mark:number;

}


function Marksheet(props:marks){
    return(
        <div>
           <h1>Mark Sheet</h1>
           <p>Name:{props.name}</p> 
           <p>Subject:{props.subject}</p>
           <p>Mark{props.mark}</p>
            
        </div>
    )

}
export default Marksheet