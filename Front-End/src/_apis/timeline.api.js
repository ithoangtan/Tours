import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";

const url = "timeline";

export const getListTimelineByIdTour = idTour => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idTour=${idTour}`);
};
