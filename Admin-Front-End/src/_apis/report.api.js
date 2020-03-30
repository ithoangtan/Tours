import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";

const pathReport = "report";
const pathReportNumberOfTourists = "report-number-of-tourists";
const pathReportNumberPeopleFollowDestination =
   "report-number-people-follow-destination";
const pathReportRevenueFollowMonthAll = "report-revenue-follow-month";

export const getReport = () => {
   return axiosService.get(`${API_ENDPOINT}/${pathReport}`);
};

export const getReportNumberOfTourists = () => {
   return axiosService.get(`${API_ENDPOINT}/${pathReportNumberOfTourists}`);
};

export const getReportNumberPeopleFollowDestination = () => {
   return axiosService.get(
      `${API_ENDPOINT}/${pathReportNumberPeopleFollowDestination}`
   );
};

export const getReportRevenueFollowMonthAll = () => {
   return axiosService.get(
      `${API_ENDPOINT}/${pathReportRevenueFollowMonthAll}`
   );
};

//   "/report-number-of-tourists",
//   report.getReportNumberOfTourists
//   "/report-number-people-follow-destination",
//   report.getReportNumberPeopleFollowDestination
//   "/report-revenue-follow-month",
//   report.getReportRevenueFollowMonthAll
