import React from "react";

type card ={
    name : string;
    address : string;
    dob : string;
    phone : number;
}


function IdCard({name , address , dob , phone}:card){
    return(
        <div>
            <h1>ID</h1>
            <p>Name:{name}</p>
            <p>Address:{address}</p>
            <p>DOB:{dob}</p>
            <p>Ph:{phone}</p>
        </div>
    )
}
export default IdCard