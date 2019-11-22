import axiosService from "../commons/axios.service";
import { API_ENDPOINT } from "../constants/index.constants";

const url = "tour";
const urls = "tours";

export const getListTour = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const deleteTour = idTour => {
   return axiosService.delete(`${API_ENDPOINT}/${url}/?idTour=${idTour}`);
};

export const patchTour = data => {
   return axiosService.patch(`${API_ENDPOINT}/${url}`, data);
};
