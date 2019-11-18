import { combineReducers } from "redux";
import tourReducer from "./tour.reducer";

const rootReducer = combineReducers({
   tour: tourReducer
});

export default rootReducer;
