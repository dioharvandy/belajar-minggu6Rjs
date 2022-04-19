import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCar } from '../../../store/actions/carAction';


const AddCar = ()=>{
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [year, setYear] = useState(null)
    const [brand, setBrand] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()

        const payload ={
            name,
            type,
            year,
            brand
          }

        dispatch(addCar(payload))
    }
    return(
        <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card mb-3 text-center border-primary">
                  <div className="card-header">
                    Add Car Card
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit} className="row g-3">
                      <div className="row">
                            <div className="col">
                              <label className='form-label' for="fname">Car name:</label>
                              <input className='form-control' onChange={(e) => setName(e.target.value)} type="text" id="fname" name="fname"/>
                            </div>
                            <div className="col">
                              <label className='form-label' for="lname">Type:</label>
                              <input className='form-control' onChange={(e) => setType(e.target.value)} type="text" id="lname" name="lname"/>                        
                            </div>
                          </div>  
                          <div className="row">
                            <div className="col">
                              <label className='form-label' for="lname">Year:</label>
                              <input className='form-control' onChange={(e) => setYear(e.target.value)} type="number" id="lname" name="lname"/>
                            </div>
                            <div className="col">
                              <label className='form-label' for="lname">Brand:</label>
                              <input className='form-control' onChange={(e) => setBrand(e.target.value)} type="text" id="lname" name="lname"/>  
                            </div>
                          </div>
                            <div className="col">
                              <button className='btn btn-primary' type="submit" >Add</button>
                            </div>                       
                    </form>
                </div>
              </div>              
            </div>  
        </div>
    )
}

export default AddCar;