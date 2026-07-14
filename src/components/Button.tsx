function Button(){
    function handleClick(){
        alert("You clicked the button!")
        console.log("Button clicked!")
    }
    return(
        <button onClick={handleClick}>
            Click me
        </button>
    )
}
export default Button