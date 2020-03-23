import * as evaluateConstants from "../_constants/evaluate.module";
import { toastError, toastInfo } from "../_helper/toastify.helper";
import tourReducer from "./tour.reducer";
import * as evaluateActions from "../_actions/evaluate.actions";

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
            listEvaluateByIdTour: error
         };
      }
      //Post eveluate
      case evaluateConstants.FETCH_POST_EVALUATE_SUCCESS: {
         toastInfo({ message: "Cảm ơn bạn đã viết đánh giá!" });
         evaluateActions.fetchListEvaluateByIdTourRequest(
            tourReducer.tourById.idTour
         );
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
