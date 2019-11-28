import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";

const url = "image";

export const getListImageByIdTour = idTour => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idTour=${idTour}`);
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
