import axiosService from "../commons/axios.service";
import { API_ENDPOINT } from "../constants/index.constants";

const url = "image";

export const getListImageByIdTour = idTour => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idTour=${idTour}`);
};
