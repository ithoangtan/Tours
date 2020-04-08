import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";
import Cookies from "js-cookie";
const url = "tour";
const urls = "tours";

export const getListTour = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};
export const getListTourSearch = data => {
   return axiosService.post(`${API_ENDPOINT}/${urls}/search`, data);
};
export const getTourById = idTour => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idTour=${idTour}`);
};
export const getTourByTime = time => {
   return axiosService.get(
      `${API_ENDPOINT}/report/destination-by-time?month=${time}`
   );
};

export const postTour = data => {
   return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const deleteTour = idTour => {
   return axiosService.delete(`${API_ENDPOINT}/${url}?idTour=${idTour}`);
};

export const patchTour = data => {
   return axiosService.patch(`${API_ENDPOINT}/${url}`, data);
};

const urlImages = "images";

export const getListImageTour = () => {
   return axiosService.get(`${API_ENDPOINT}/${urlImages}`);
};

export const deleteImageTour = (idImage, name) => {
   return axiosService.delete(
      `${API_ENDPOINT}/${url}/?idImage=${idImage}&name=${name}`
   );
};

export const uploadImageTour = (file, idTour) => {
   return axiosService.post(
      `${API_ENDPOINT}/${url}/?idTour=${idTour}`,
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
