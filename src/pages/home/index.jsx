import React, { useEffect, useState } from 'react';
import axios from 'axios';
// components
// import MyButton from '../../components/button';
import MyTable from '../../components/table';


const Home = ()=>{
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
      const [activity, setActivity] = useState([])
      const getActivity = async()=>{
        const response = await fetch(`https://www.boredapi.com/api/activity`)
        setActivity(await response.json())
      }
      useEffect(()=>{
        getActivity()
      },[])
      return (
        <>
          <div className="row justify-content-center">
            <div className="col-md-6">
            <MyTable
                columns = {columns}
                datas = {datas}
                onDelete = {handleDelete}
              />
            </div>
            <div className="col-md-6">
              {/* {JSON.stringify(activity)} */}
              <div className="card text-center border-primary">
              <div className="card-header">
                Activity Card
              </div>
              <div className="card-body">
                <h6 className="card-title">What Should You Do Now ?</h6>
                <p className="card-text">{activity.activity}</p>
                <h6 className="card-subtitle mb-2 text-muted">Type Of Activity </h6>
                <p className="card-text">{activity.type}</p>
                <button type='button' onClick={()=> getActivity()} className="btn btn-sm btn-primary">Try Another</button>
              </div>
            </div>
            </div>
          </div>
          <div className="row justify-content-center">
          </div>
        </>
      );
}

export default Home;