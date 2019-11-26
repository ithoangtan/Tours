import * as imageApis from "../apis/image";
import * as imageConstants from "../constants/image.module";

export const fetchListImageByIdTour = () => {
   return {
      type: imageConstants.FETCH_IMAGE_GET_BYID
   };
};

//List Image Tour do tour action quản lý

//GET Image BY ID Tour
export const fetchImageByIdTourSuccess = data => {
   return {
      type: imageConstants.FETCH_IMAGE_GET_BYID_TOUR_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchImageByIdTourError = error => {
   return {
      type: imageConstants.FETCH_IMAGE_GET_BYID_TOUR_FAILED,
      payload: {
         error
      }
   };
};

export const fetchListImageByIdTourRequest = idTour => {
   return dispatch => {
      imageApis
         .getListImageByIdTour(idTour)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchImageByIdTourSuccess(data));
         })
         .catch(error => {
            dispatch(fetchImageByIdTourError(error));
         });
   };
};
//end Get Tour By ID
