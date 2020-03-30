import * as reportConstants from "../_constants/report.module";
import { toastError } from "../_helper/toastify.helper";
const initialState = {
   report: {},
   reportNumberOfTourists: {},
   reportNumberPeopleFollowDestination: [],
   reportRevenueFollowMonthAll: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      // Report
      case reportConstants.FETCH_REPORT:
         return {
            ...state,
            report: {}
         };
      case reportConstants.FETCH_REPORT_SUCCESS: {
         const { data } = action.payload;
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

      // ReportNumberOfTourists
      case reportConstants.FETCH_REPORT_NUMBER_OF_TOURISTS_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            reportNumberOfTourists: data
         };
      }
      case reportConstants.FETCH_REPORT_NUMBER_OF_TOURISTS_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            reportNumberOfTourists: error
         };
      }

      // ReportNumberPeopleFollowDestination
      case reportConstants.FETCH_REPORT_NUMBER_PEOPLE_FOLLOW_DESTINATION_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            reportNumberPeopleFollowDestination: data
         };
      }
      case reportConstants.FETCH_REPORT_NUMBER_PEOPLE_FOLLOW_DESTINATION_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            reportNumberPeopleFollowDestination: error
         };
      }

      // ReportRevenueFollowMonthAll
      case reportConstants.FETCH_REPORT_REVENUE_FOLLOW_MONTH_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            reportRevenueFollowMonthAll: data
         };
      }
      case reportConstants.FETCH_REPORT_REVENUE_FOLLOW_MONTH_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            reportRevenueFollowMonthAll: error
         };
      }
      default:
         return state;
   }
};

export default reducer;
