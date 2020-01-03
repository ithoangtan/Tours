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
