import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";
const url = "tag";
const urls = "tags";

export const getListTag = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const getTagById = idTag => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idTag=${idTag}`);
};

export const postTag = data => {
   console.log(data);

   return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const deleteTag = idTag => {
   return axiosService.delete(`${API_ENDPOINT}/${url}?idTag=${idTag}`);
};

export const patchTag = data => {
   return axiosService.put(`${API_ENDPOINT}/${url}`, data);
};
