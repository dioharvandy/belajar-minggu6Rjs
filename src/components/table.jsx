

const MyTable = ({
    data,
    onDelete
})=>{
    return (
        // <button>click me !</button>
       data.map((v) => {
           return(
        <>
           <tr className="text-center">
               <td>{v.id}</td>
               <td>{v.name}</td>
               <td><button className="btn btn-sm btn-danger" onClick={()=>{window.confirm('delete this item?') && onDelete(v.id)}}>Delete</button></td>
           </tr>
        </>
        )
       })
    )
}

export default MyTable