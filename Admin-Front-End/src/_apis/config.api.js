import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";
import Cookies from "js-cookie";
const url = "config";
const urls = "configs";

export const getListConfig = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const getConfigById = (idConfig) => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idConfig=${idConfig}`);
};

export const getConfigByInfoType = (infoType) => {
   return axiosService.get(`${API_ENDPOINT}/${url}?infoType=${infoType}`);
};

export const postConfig = (data) => {
   return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const deleteConfig = (idConfig) => {
   return axiosService.delete(`${API_ENDPOINT}/${url}?idConfig=${idConfig}`);
};

export const patchConfig = (data) => {
   return axiosService.put(`${API_ENDPOINT}/${url}`, data);
};

const urlImages = "images";

export const getListImageConfig = () => {
   return axiosService.get(`${API_ENDPOINT}/${urlImages}`);
};

export const deleteImageConfig = (idImage, name) => {
   return axiosService.delete(
      `${API_ENDPOINT}/${url}/?idImage=${idImage}&name=${name}`
   );
};

export const uploadImageConfig = (file, idConfig) => {
   return axiosService.post(
      `${API_ENDPOINT}/${url}/?idConfig=${idConfig}`,
      { body: file },
      {
         headers: {
            "Content-Type": "multipart/form-data",
            Authentication: getCookie("token"),
         },
      }
   );
};

function getCookie(name) {
   const token = Cookies.get(name);
   return token;
}
