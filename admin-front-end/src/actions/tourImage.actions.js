import * as tourApis from "../apis/tourImage.api";
import * as tourConstants from "../constants/tourImage.module";

//Delete Tour
export const fetchDeleteTourImageSuccess = (file, data) => {
   return {
      type: tourConstants.FETCH_TOUR_IMAGE_DELETE_SUCCESS,
      payload: {
         data
      },
      file: { file }
   };
};

export const fetchDeleteTourImageError = error => {
   return {
      type: tourConstants.FETCH_TOUR_IMAGE_DELETE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchDeleteTourImageRequest = file => {
   return dispatch => {
      tourApis
         .deleteImageTour(file.idImage, file.name)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchDeleteTourImageSuccess(file, data));
         })
         .catch(error => {
            dispatch(fetchDeleteTourImageError(error));
         });
   };
};
