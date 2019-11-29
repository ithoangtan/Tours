import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";

const url = "tour";
const urls = "tours";

export const getListTour = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const getTourById = idTour => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idTour=${idTour}`);
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
            "Content-Type": "multipart/form-data"
         }
      }
   );
};
