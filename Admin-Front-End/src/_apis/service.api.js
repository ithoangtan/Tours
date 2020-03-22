import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";
const url = "service";
const urls = "services";

export const getListService = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const getServiceById = idService => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idService=${idService}`);
};

export const postService = data => {
   return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const deleteService = idService => {
   return axiosService.delete(`${API_ENDPOINT}/${url}?idService=${idService}`);
};

export const patchService = data => {
   return axiosService.patch(`${API_ENDPOINT}/${url}`, data);
};
