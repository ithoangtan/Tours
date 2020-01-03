import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";

const pathReport = "report";

export const getReport = () => {
   return axiosService.get(`${API_ENDPOINT}/${pathReport}`);
};
