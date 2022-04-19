import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import carReducer from "./reducers/carReducers";

const rootReducer = combineReducers({
    carReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store