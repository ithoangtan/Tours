import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";
import Cookies from "js-cookie";
const url = "notification";
const urls = "notifications";

export const getListNotification = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const getNotificationById = (idNotification) => {
   return axiosService.get(
      `${API_ENDPOINT}/${url}?idNotification=${idNotification}`
   );
};

export const postNotification = (data) => {
   return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const deleteNotification = (idNotification) => {
   return axiosService.delete(
      `${API_ENDPOINT}/${url}?idNotification=${idNotification}`
   );
};

export const patchNotification = (data) => {
   return axiosService.put(`${API_ENDPOINT}/${url}`, data);
};

const urlImages = "images";

export const getListImageNotification = () => {
   return axiosService.get(`${API_ENDPOINT}/${urlImages}`);
};

export const deleteImageNotification = (idImage, name) => {
   return axiosService.delete(
      `${API_ENDPOINT}/${url}/?idImage=${idImage}&name=${name}`
   );
};

export const uploadImageNotification = (file, idNotification) => {
   return axiosService.post(
      `${API_ENDPOINT}/${url}/?idNotification=${idNotification}`,
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
