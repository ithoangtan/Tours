import axiosService from "../commons/axios.service";
import { API_ENDPOINT } from "../constants/index.constants";

const url = "image";
const urls = "images";

export const getListImageTourById = idTour => {
   return axiosService.get(`${API_ENDPOINT}/${urls}/?idTour=${idTour}`);
};

export const deleteImageTour = idImage => {
   return axiosService.delete(`${API_ENDPOINT}/${url}/?idImage=${idImage}`);
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
