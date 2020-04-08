import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";

const url = "post";
const urls = "posts";

export const getListPost = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const getListPostSearch = data => {
   return axiosService.post(`${API_ENDPOINT}/${urls}/search`, data);
};

export const getPostById = idPost => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idPost=${idPost}`);
};

export const votePostById = data => {
   return axiosService.post(`${API_ENDPOINT}/${url}/vote`, data);
};
