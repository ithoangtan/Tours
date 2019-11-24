import { combineReducers } from "redux";
import tourReducer from "./tour.Reducer";
import tourImageReducer from "./tourImage.Reducer";

const rootReducer = combineReducers({
   tour: tourReducer,
   tourImage: tourImageReducer
});

export default rootReducer;
