import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";
import Cookies from "js-cookie";
const url = "account";
const urls = "accounts";

export const getListAccount = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const getAccountById = idAccount => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idAccount=${idAccount}`);
};

export const postAccount = data => {
   return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const deleteAccount = idAccount => {
   return axiosService.delete(`${API_ENDPOINT}/${url}?idAccount=${idAccount}`);
};

export const patchAccount = data => {
   return axiosService.patch(`${API_ENDPOINT}/${url}`, data);
};

const urlImages = "images";

export const getListImageAccount = () => {
   return axiosService.get(`${API_ENDPOINT}/${urlImages}`);
};

export const deleteImageAccount = (idImage, name) => {
   return axiosService.delete(
      `${API_ENDPOINT}/${url}/?idImage=${idImage}&name=${name}`
   );
};

export const uploadImageAccount = (file, idAccount) => {
   return axiosService.post(
      `${API_ENDPOINT}/${url}/?idAccount=${idAccount}`,
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
