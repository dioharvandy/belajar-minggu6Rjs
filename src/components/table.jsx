const MyTable = ({
    columns,
    datas,
    onDelete,
    type
})=>{
    return (
        // <button>click me !</button>
        <>
        
        <table className="table table-striped table-bordered">
        <thead>
          <tr>
              <th colSpan={columns.length+1}>{type==="cars"?<a className="btn btn-sm btn-primary" href={`cars/add`}>Add</a>:false}</th>
          </tr>
          <tr  className='text-center'>
        {
        columns?.map((column)=>{
            return(
                <th scope="col">{column}</th>
            )
        })
        }
          <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {
           datas?.map((data) => {
            return(
         <>
            <tr className="text-center">
        {
                Object.keys(data).map((key)=>{
                    return(
                        <td>{data[key]}</td>
                    )
                })
        }
                <td>
                    <button className="btn btn-sm btn-danger" onClick={()=>{window.confirm('delete this item?') && onDelete(data.id)}}>Delete</button> {type === "cars"?<a className="btn btn-sm btn-success" href={`cars/edit/${data.id}`}>Edit</a>:false}</td>
            </tr>
         </>
         )
        })
        }            
        </tbody>
      </table>
      </>
    )
}

export default MyTable