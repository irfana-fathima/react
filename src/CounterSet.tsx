import {useState} from "react"
function CounterSet(){
    const [count,setCount]= useState(0)

    function handleClick(){
        setCount(count+1)
        console.log(count)
    
    }

    return(
        <div>
            <h2>Count:{count}</h2>
            <button onClick={handleClick}>click to Add</button>
        </div>
    )
}
export default CounterSet