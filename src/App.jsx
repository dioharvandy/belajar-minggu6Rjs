import './App.css';
import React, { useEffect, useState } from 'react';

//import components
import MyTable from './components/table';

function App() {

  const [datas, setData] = useState(
    [
      {
        id : 1,
        name : "dio"
      },
      {
        id : 2,
        name : "harvandy"
      },
      {
        id : 3,
        name : "dio harvandy"
      },
      {
        id : 4,
        name : "harvandy dio"
      },
    ]
  )

  const [columns,setColumns] =  useState([
    'id',
    'name'
  ])

  const handleDelete = (id)=>{
    setData(datas.filter((v)=> {
      return (v.id!==id)
    }))
  }
  useEffect(()=>{
    console.log("Use Effect Run")
  },[])
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
        <MyTable
            columns = {columns}
            datas = {datas}
            onDelete = {handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
