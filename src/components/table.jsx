

const MyTable = ({
    columns,
    datas,
    onDelete
})=>{
    return (
        // <button>click me !</button>
        <table className="table">
        <thead>
          <tr  className='text-center'>
{
        columns?.map((v)=>{
            return(
                <th scope="col">{v}</th>
            )
        })
}
          </tr>
        </thead>
        <tbody>
{
           datas?.map((v) => {
            return(
         <>
            <tr className="text-center">
{
                Object.keys(v).map((x)=>{
                    return(
                        <td>{v[x]}</td>
                    )
                })
}
                <td><button className="btn btn-sm btn-danger" onClick={()=>{window.confirm('delete this item?') && onDelete(v.id)}}>Delete</button></td>
            </tr>
         </>
         )
        })
}            
        </tbody>
      </table>
    )
}

export default MyTable