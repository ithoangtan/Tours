import * as tourApis from "../apis/tourImage.api";
import * as tourConstants from "../constants/tourImage.module";

//Delete Tour
export const fetchDeleteTourImageSuccess = (record, data) => {
   return {
      type: tourConstants.FETCH_TOUR_IMAGE_DELETE_SUCCESS,
      payload: {
         data
      },
      record: { record }
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

export const fetchDeleteTourImageRequest = record => {
   return dispatch => {
      tourApis
         .deleteImageTour(record.idTour)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchDeleteTourImageSuccess(record, data));
         })
         .catch(error => {
            dispatch(fetchDeleteTourImageError(error));
         });
   };
};
