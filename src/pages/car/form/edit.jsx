import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getCarById, updateCar } from '../../../store/actions/carAction'

const EditCar = ()=>{

    const dispatch = useDispatch()
    const {id} = useParams()

    const {carById} = useSelector(state => state.carReducer)

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [year, setYear] = useState(null)
    const [brand, setBrand] = useState('')

    useEffect(()=>{ 
        dispatch(getCarById(id))
        setName(carById.name)
        setType(carById.type)
        setYear(carById.year)
        setBrand(carById.year)
        
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const payload ={
          name,
          type,
          year,
          brand
        }
    
        dispatch(updateCar(id, payload))
      }
      
    return(
    <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mb-3 text-center border-primary">
              <div className="card-header">
                Edit Car Card
              </div>
            <div className="card-body">
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="row">
                        <div className="col">
                          <label className='form-label' for="fname">Car name:</label>
                          <input className='form-control' defaultValue={carById.nama} onChange={(e) => setName(e.target.value)} type="text" id="fname" name="fname"/>
                        </div>
                        <div className="col">
                          <label className='form-label' for="lname">Type:</label>
                          <input className='form-control' defaultValue={carById.type} onChange={(e) => setType(e.target.value)} type="text" id="lname" name="lname"/>                        
                        </div>
                      </div>  
                      <div className="row">
                        <div className="col">
                          <label className='form-label' for="lname">Year:</label>
                          <input className='form-control' defaultValue={carById.year} onChange={(e) => setYear(e.target.value)} type="number" id="lname" name="lname"/>
                        </div>
                        <div className="col">
                          <label className='form-label' for="lname">Brand:</label>
                          <input className='form-control' defaultValue={carById.brand} onChange={(e) => setBrand(e.target.value)} type="text" id="lname" name="lname"/>  
                        </div>
                      </div>
                        <div className="col">
                          <button className='btn btn-success' type="submit" >Edit</button>
                        </div>                       
                </form>
            </div>
          </div>              
        </div>  
    </div>
    )
}

export default EditCar;