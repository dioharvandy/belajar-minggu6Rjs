import axios from 'axios';

export const getCars = ()=>{
    return async (dispatch) =>{
        try {
            const response = await axios  ({
                url:'http://localhost:5000/car',
                method: 'GET'
            })

            console.log(response)
            
            dispatch({
                type: 'GET_CARS',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export const getCarById = (id)=>{
    return async (dispatch) =>{
        try {
            const response = await axios  ({
                url:`http://localhost:5000/car/${id}`,
                method: 'GET'
            })

            console.log(response)
            
            dispatch({
                type: 'GET_CAR_BY_ID',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }   
}

export const addCar = (payload)=>{
    return async (dispatch)=>{
        try {
            const responseAdd = await axios ({
                url:'http://localhost:5000/car',
                method: 'POST',
                data: payload
            })
            if (responseAdd.status === 201){

                const response = await axios  ({
                    url:'http://localhost:5000/car',
                    method: 'GET'
                })   

                dispatch({
                    type: 'GET_CARS',
                    payload: response.data
                })             
            }

        } catch (error) {
            console.log(error)
        }
    }
}

export const updateCar = (id, payload)=>{
    return async (dispatch)=>{
        try {
            const responseUpdate = await axios ({
                url:`http://localhost:5000/car/${id}`,
                method: 'PUT',
                data: payload
            })
            if (responseUpdate.status === 201){

                const response = await axios  ({
                    url:'http://localhost:5000/car',
                    method: 'GET'
                })  
                
                dispatch({
                    type: 'GET_CARS',
                    payload: response.data
                })
            }

        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteCar = (id)=>{
    return async (dispatch)=>{
        try {
            const responseDelete = await axios ({
                url:`http://localhost:5000/car/${id}`,
                method: 'DELETE'
            })
            if (responseDelete.status === 201){
                const response = await axios  ({
                    url:'http://localhost:5000/car',
                    method: 'GET'
                })    
                
                dispatch({
                    type: 'GET_CARS',
                    payload: response.data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}