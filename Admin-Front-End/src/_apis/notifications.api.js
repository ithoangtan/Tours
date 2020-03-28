import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";
import Cookies from "js-cookie";
const url = "notification";
const urls = "notifications";

export const getListNotifications = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const getNotificationsById = idNotifications => {
   return axiosService.get(
      `${API_ENDPOINT}/${url}?idNotifications=${idNotifications}`
   );
};

export const postNotifications = data => {
   return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const deleteNotifications = idNotifications => {
   return axiosService.delete(
      `${API_ENDPOINT}/${url}?idNotifications=${idNotifications}`
   );
};

export const patchNotifications = data => {
   return axiosService.patch(`${API_ENDPOINT}/${url}`, data);
};

const urlImages = "images";

export const getListImageNotifications = () => {
   return axiosService.get(`${API_ENDPOINT}/${urlImages}`);
};

export const deleteImageNotifications = (idImage, name) => {
   return axiosService.delete(
      `${API_ENDPOINT}/${url}/?idImage=${idImage}&name=${name}`
   );
};

export const uploadImageNotifications = (file, idNotifications) => {
   return axiosService.post(
      `${API_ENDPOINT}/${url}/?idNotifications=${idNotifications}`,
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
