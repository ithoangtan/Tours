import * as evaluateConstants from "../_constants/evaluate.module";
import { toastError } from "../_helper/toastify.helper";
import { messageSuccess } from "../_helper/message.helper";
const initialState = {
   listEvaluateByIdTour: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      //Load List Evaluate ById Tour
      case evaluateConstants.FETCH_EVALUATE_GET_BYID_TOUR_SUCCESS: {
         const { data } = action.payload;
         // toastListEvaluateGetByIdTourSuccess(data);
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
            listEvaluateByIdTour: error[0]
         };
      }
      //Post eveluate
      case evaluateConstants.FETCH_POST_EVALUATE_SUCCESS: {
         messageSuccess("Cảm ơn bạn đã viết đánh giá!", 3);
         return {
            ...state
         };
      }
      case evaluateConstants.FETCH_POST_EVALUATE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state
         };
      }
      default:
         return state;
   }
};

export default reducer;
