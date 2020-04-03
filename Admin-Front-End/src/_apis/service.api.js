import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";
const url = "service";
const urls = "services";

export const getListServices = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const getServicesById = idServices => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idServices=${idServices}`);
};

export const postServices = data => {
   return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const deleteServices = idServices => {
   return axiosService.delete(
      `${API_ENDPOINT}/${url}?idServices=${idServices}`
   );
};

export const patchServices = data => {
   return axiosService.put(`${API_ENDPOINT}/${url}`, data);
};
