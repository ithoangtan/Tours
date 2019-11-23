import { combineReducers } from "redux";
import tourReducer from "./tour.reducer";
import tourImageReducer from "./tourImage.reducer";

const rootReducer = combineReducers({
   tour: tourReducer,
   tourImage: tourImageReducer
});

export default rootReducer;
