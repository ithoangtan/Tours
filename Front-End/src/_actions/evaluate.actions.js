import * as evaluateApis from "../_apis/evaluate.api";
import * as evaluateConstants from "../_constants/evaluate.module";
import tourReducer from "../_reducers/tour.reducer";

//GET Evaluate BY ID Tour
export const fetchEvaluateByIdTourSuccess = data => {
   return {
      type: evaluateConstants.FETCH_EVALUATE_GET_BYID_TOUR_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchEvaluateByIdTourError = error => {
   return {
      type: evaluateConstants.FETCH_EVALUATE_GET_BYID_TOUR_FAILED,
      payload: {
         error
      }
   };
};

export const fetchListEvaluateByIdTourRequest = idTour => {
   return dispatch => {
      evaluateApis
         .getListEvaluateByIdTour(idTour)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchEvaluateByIdTourSuccess(data));
         })
         .catch(error => {
            dispatch(fetchEvaluateByIdTourError(error));
         });
   };
};
//end Get Tour By ID

//POST Evaluate
export const fetchPostEvaluateSuccess = data => {
   return {
      type: evaluateConstants.FETCH_POST_EVALUATE_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchPostEvaluateError = error => {
   return {
      type: evaluateConstants.FETCH_POST_EVALUATE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPostEvaluateRequest = data => {
   return dispatch => {
      evaluateApis
         .postEvaluate(data)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPostEvaluateSuccess(data));
            dispatch(
               fetchListEvaluateByIdTourRequest(tourReducer.tourById.idTour)
            );
         })
         .catch(error => {
            dispatch(fetchPostEvaluateError(error));
         });
   };
};
//end Create Evaluate
