import axiosService from "../commons/axios.service";
import { API_ENDPOINT } from "../constants/index.constants";

const url = "tours";

export const getListTour = () => {
   return axiosService.get(`${API_ENDPOINT}/${url}`);
};
