import * as tourConstants from "./../constants/task.module";
import { toastError, toastSuccess } from "../helper/toastify.helper";
const initialState = {
   listTour: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case tourConstants.FETCH_TOUR:
         return {
            ...state,
            listTour: []
         };
      case tourConstants.FETCH_TOUR_SUCCESS: {
         const { data } = action.payload;
         toastSuccess(data);
         return {
            ...state,
            listTour: data
         };
      }
      case tourConstants.FETCH_TOUR_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listTour: []
         };
      }
      default:
         return state;
   }
};

export default reducer;
