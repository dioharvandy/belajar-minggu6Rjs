

const MyButton = ({
    buttonName,
    handleCounter
})=>{
    return (
        // <button>click me !</button>
        <button onClick={handleCounter} className = "btn btn-success">{buttonName}</button>
    )
}

export default MyButton