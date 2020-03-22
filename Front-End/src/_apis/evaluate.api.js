import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";

const url = "evaluate";

export const getListEvaluateByIdTour = idTour => {
   return axiosService.get(`${API_ENDPOINT}/${url}/bytour?idTour=${idTour}`);
};
