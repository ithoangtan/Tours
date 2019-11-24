import { combineReducers } from "redux";
import tourReducer from "./tour.reducer";
import scheduleReducer from "./schedule.reducer";
import tourImageReducer from "./tourImage.reducer";

const rootReducer = combineReducers({
   tour: tourReducer,
   tourImage: tourImageReducer,
   schedule: scheduleReducer
});

export default rootReducer;
