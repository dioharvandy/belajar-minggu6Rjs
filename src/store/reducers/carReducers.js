const initialState = {
    cars: ["Data Kosong"],
    carById: {status : "Data Kosong"}
}

const carReducer = (state = initialState, action)=>{
        switch (action.type) {
            case 'GET_CARS':
                return {
                    ...state,
                    cars: action.payload
                }
            case 'GET_CAR_BY_ID':
                return {
                    ...state,
                    carById: action.payload
                }         
            default:
                return state;
        }
}

export default carReducer