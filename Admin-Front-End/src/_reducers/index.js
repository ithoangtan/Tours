import { combineReducers } from "redux";
import tourReducer from "./tour.reducer";
import scheduleReducer from "./schedule.reducer";
import imageReducer from "./image.reducer";
import authReducer from "./auth.reducer";
import orderReducer from "./order.reducer";
import reportReducer from "./report.reducer";
import tagReducer from "./tag.reducer";
import serviceReducer from "./service.reducer";
import postReducer from "./post.reducer";
import accountReducer from "./account.reducer";
import notificationReducer from "./notification.reducer";
import timelineReducer from "./timeline.reducer";
import configReducer from "./config.reducer";

const rootReducer = combineReducers({
   tour: tourReducer,
   image: imageReducer,
   schedule: scheduleReducer,
   auth: authReducer,
   order: orderReducer,
   report: reportReducer,
   tag: tagReducer,
   service: serviceReducer,
   post: postReducer,
   config: configReducer,
   account: accountReducer,
   notification: notificationReducer,
   timeline: timelineReducer,
});

export default rootReducer;
