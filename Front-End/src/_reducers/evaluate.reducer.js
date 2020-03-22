import * as evaluateConstants from "../_constants/evaluate.module";
import { toastError } from "../_helper/toastify.helper";
const initialState = {
   listEvaluateByIdTour: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      //Load List timeline ById Tour
      case evaluateConstants.FETCH_EVALUATE_GET_BYID_TOUR_SUCCESS: {
         const { data } = action.payload;
         // toastListTimelineGetByIdTourSuccess(data);
         return {
            ...state,
            listEvaluateByIdTour: data[0]
         };
      }
      case evaluateConstants.FETCH_EVALUATE_GET_BYID_TOUR_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listEvaluateByIdTour: error
         };
      }
      default:
         return state;
   }
};

export default reducer;
