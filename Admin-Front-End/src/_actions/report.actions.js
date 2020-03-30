import * as reportApis from "../_apis/report.api";
import * as reportConstants from "../_constants/report.module";

export const fetchReport = () => {
   return {
      type: reportConstants.FETCH_REPORT
   };
};

//List Tour
export const fetchReportSuccess = (data, status) => {
   return {
      type: reportConstants.FETCH_REPORT_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data,
         status
      }
   };
};

export const fetchReportError = error => {
   return {
      type: reportConstants.FETCH_REPORT_FAILED,
      payload: {
         error
      }
   };
};
/**
 * B1: fetch isTourRequest()
 * B2: ResetL state reports --> []
 * B3: Khi API thành công thì vào then:
 * fetchReportSucces (data response)
 *
 */
export const fetchReportRequest = data => {
   return dispatch => {
      dispatch(fetchReport()); //reset state reports-->[]
      reportApis
         .getReport(data)
         .then(resp => {
            const { data, status } = resp;
            dispatch(fetchReportSuccess(data, status));
         })
         .catch(error => {
            dispatch(fetchReportError(error));
         });
   };
};

// ReportNumberOfTourists
export const fetchReportNumberOfTouristsSuccess = (data, status) => {
   return {
      type: reportConstants.FETCH_REPORT_NUMBER_OF_TOURISTS_SUCCESS,
      payload: {
         data,
         status
      }
   };
};

export const fetchReportNumberOfTouristsError = error => {
   return {
      type: reportConstants.FETCH_REPORT_NUMBER_OF_TOURISTS_FAILED,
      payload: {
         error
      }
   };
};

export const fetchReportNumberOfTouristsRequest = () => {
   return dispatch => {
      reportApis
         .getReportNumberOfTourists()
         .then(resp => {
            const { data, status } = resp;
            dispatch(fetchReportNumberOfTouristsSuccess(data, status));
         })
         .catch(error => {
            dispatch(fetchReportNumberOfTouristsError(error));
         });
   };
};

// ReportNumberPeopleFollowDestination
export const fetchReportNumberPeopleFollowDestinationSuccess = (
   data,
   status
) => {
   return {
      type:
         reportConstants.FETCH_REPORT_NUMBER_PEOPLE_FOLLOW_DESTINATION_SUCCESS,
      payload: {
         data,
         status
      }
   };
};
export const fetchReportNumberPeopleFollowDestinationError = error => {
   return {
      type:
         reportConstants.FETCH_REPORT_NUMBER_PEOPLE_FOLLOW_DESTINATION_FAILED,
      payload: {
         error
      }
   };
};
export const fetchReportNumberPeopleFollowDestinationRequest = () => {
   return dispatch => {
      reportApis
         .getReportNumberPeopleFollowDestination()
         .then(resp => {
            const { data, status } = resp;
            dispatch(
               fetchReportNumberPeopleFollowDestinationSuccess(data, status)
            );
         })
         .catch(error => {
            dispatch(fetchReportNumberPeopleFollowDestinationError(error));
         });
   };
};

// ReportRevenueFollowMonthAll
export const fetchReportRevenueFollowMonthAllSuccess = (data, status) => {
   return {
      type: reportConstants.FETCH_REPORT_REVENUE_FOLLOW_MONTH_SUCCESS,
      payload: {
         data,
         status
      }
   };
};

export const fetchReportRevenueFollowMonthAllError = error => {
   return {
      type: reportConstants.FETCH_REPORT_REVENUE_FOLLOW_MONTH_FAILED,
      payload: {
         error
      }
   };
};

export const fetchReportRevenueFollowMonthAllRequest = () => {
   return dispatch => {
      reportApis
         .getReportRevenueFollowMonthAll()
         .then(resp => {
            const { data, status } = resp;
            dispatch(fetchReportRevenueFollowMonthAllSuccess(data, status));
         })
         .catch(error => {
            dispatch(fetchReportRevenueFollowMonthAllError(error));
         });
   };
};
