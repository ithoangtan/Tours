import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";
import Cookies from "js-cookie";
const url = "general";
const urls = "generals";

export const getListGeneral = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const getGeneralById = idGeneral => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idGeneral=${idGeneral}`);
};

export const postGeneral = data => {
   return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const deleteGeneral = idGeneral => {
   return axiosService.delete(`${API_ENDPOINT}/${url}?idGeneral=${idGeneral}`);
};

export const patchGeneral = data => {
   return axiosService.patch(`${API_ENDPOINT}/${url}`, data);
};

const urlImages = "images";

export const getListImageGeneral = () => {
   return axiosService.get(`${API_ENDPOINT}/${urlImages}`);
};

export const deleteImageGeneral = (idImage, name) => {
   return axiosService.delete(
      `${API_ENDPOINT}/${url}/?idImage=${idImage}&name=${name}`
   );
};

export const uploadImageGeneral = (file, idGeneral) => {
   return axiosService.post(
      `${API_ENDPOINT}/${url}/?idGeneral=${idGeneral}`,
      { body: file },
      {
         headers: {
            "Content-Type": "multipart/form-data",
            Authentication: getCookie("token")
         }
      }
   );
};

function getCookie(name) {
   const token = Cookies.get(name);
   return token;
}
