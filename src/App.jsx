import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

//import components
import MyButton from './components/button';
import MyTable from './components/table';

function App() {

  const [counter, setCounter] = useState(0)
  const [buttonName, setButtonName] = useState("Button Components (Child)")
  const [data, setData] = useState(
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
  const handleDelete = (id)=>{
    setData(data.filter((v)=> {
      return (v.id!==id)
    }))
  }
  const handleCounter = (num)=>{
    setCounter(counter+num)
  }
  useEffect(()=>{
    console.log("Use Effect Run")
  },[])
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       {/* Edit <code>src/App.js</code> and save to reload.*/} {counter} Total Click
    //     </p>
    //     <button onClick={()=> handleCounter(1)} className = "btn btn-primary">Click Me ! (parent)</button><br />
    //     <MyButton
    //       buttonName = {buttonName}
    //       handleCounter = {()=> handleCounter(2)}
    //     />
    //     {/* <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //   </header>
    // </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <table className="table">
            <thead>
              <tr  className='text-center'>
              <th>id</th>
              <th>name</th>
              <th>action</th>
              </tr>
            </thead>
            <tbody>
              <MyTable
                data = {data}
                onDelete = {handleDelete}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
