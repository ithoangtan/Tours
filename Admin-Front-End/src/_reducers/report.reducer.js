import * as reportConstants from "../_constants/report.module";
import { toastError } from "../_helper/toastify.helper";
const initialState = {
   report: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case reportConstants.FETCH_REPORT:
         return {
            ...state,
            report: []
         };
      case reportConstants.FETCH_REPORT_SUCCESS: {
         const { data } = action.payload;
         console.log(data);
         return {
            ...state,
            report: data
         };
      }
      case reportConstants.FETCH_REPORT_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            report: error
         };
      }
      default:
         return state;
   }
};

export default reducer;
