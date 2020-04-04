import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";
import Cookies from "js-cookie";
const url = "post";
const urls = "posts";

export const getListPost = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const getPostById = (idPost) => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idPost=${idPost}`);
};

export const postPost = (data) => {
   return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const deletePost = (idPost) => {
   return axiosService.delete(`${API_ENDPOINT}/${url}?idPost=${idPost}`);
};

export const patchPost = (data) => {
   return axiosService.put(`${API_ENDPOINT}/${url}`, data);
};

const urlImagesPost = "imagesPost";

export const getListImagePost = () => {
   return axiosService.get(`${API_ENDPOINT}/${urlImagesPost}`);
};

export const deleteImagePost = (idImage, name) => {
   return axiosService.delete(
      `${API_ENDPOINT}/${url}/?idImage=${idImage}&name=${name}`
   );
};

export const uploadImagePost = (file, idPost) => {
   return axiosService.post(
      `${API_ENDPOINT}/${url}/?idPost=${idPost}`,
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
