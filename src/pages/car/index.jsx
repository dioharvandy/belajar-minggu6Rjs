import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyTable from '../../components/table';
import { getCars, deleteCar } from '../../store/actions/carAction';

const Cars = ()=>{

    const {cars} = useSelector(state => state.carReducer)
    const dispatch = useDispatch()
    const [columns, setColumns] = useState([
        'Id',
        'Car Name',
        'Type',
        'Year',
        'Brand',
        'Created_at',
        'Updated_at'
      ])

    // const handleUpdate = (id)=>{
    //     dispatch(updateCar(id))
    // }

    const handleDelete = (id)=>{
        dispatch(deleteCar(id))
    }

    useEffect(()=>{
        dispatch(getCars())
    },[])

    return(
        <div className="row justify-content-header">
            <div className="col-md-12">
              <div className="card mb-3 text-center border-primary">
                  <div className="card-header">
                    Table Card
                  </div>
                <div className="card-body">
                  <MyTable
                  columns = {columns}
                  datas = {cars}
                  onDelete = {handleDelete}
                  type = "cars"
                />
                </div>
              </div>              
            </div>            
        </div>
    )
}
export default Cars;