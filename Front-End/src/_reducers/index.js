import { combineReducers } from "redux";
import tourReducer from "./tour.reducer";
import scheduleReducer from "./schedule.reducer";
import imageReducer from "./image.reducer";
import authReducer from "./auth.reducer";
import orderReducer from "./order.reducer";
import accountReducer from "./account.reducer";
import timelineReducer from "./timeline.reducer";
import evaluateReducer from "./evaluate.reducer";
const rootReducer = combineReducers({
   tour: tourReducer,
   image: imageReducer,
   schedule: scheduleReducer,
   auth: authReducer,
   order: orderReducer,
   account: accountReducer,
   timeline: timelineReducer,
   evaluate: evaluateReducer
});

export default rootReducer;
