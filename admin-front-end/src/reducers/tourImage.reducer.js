import * as tourConstants from "./../constants/tourImage.module";
import {
   toastError,
   toastSuccess,
   toastPatchSuccess,
   toastDeleteSuccess
} from "../helper/toastify.helper";
const initialState = {
   listImageTour: [],
   delete: [],
   uploadImage: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      // case tourConstants.FETCH_TOUR_IMAGE:
      //    return {
      //       ...state,
      //       listImageTour: []
      //    };
      // case tourConstants.FETCH_TOUR_IMAGE_SUCCESS: {
      //    const { data } = action.payload;
      //    toastSuccess(data);
      //    return {
      //       ...state,
      //       listImageTour: data
      //    };
      // }
      // case tourConstants.FETCH_TOUR_IMAGE_FAILED: {
      //    const { error } = action.payload;
      //    toastError(error);
      //    return {
      //       ...state,
      //       listImageTour: error
      //    };
      // }
      //Delete
      case tourConstants.FETCH_TOUR_IMAGE_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { record } = action.record;
         toastDeleteSuccess(record);
         return {
            ...state,
            delete: data
         };
      }
      case tourConstants.FETCH_TOUR_IMAGE_DELETE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            delete: error
         };
      }
      //Upload image
      case tourConstants.FETCH_TOUR_UPLOAD_IMAGE_SUCCESS: {
         const { data } = action.payload;
         const idTour = action.idTour;
         toastPatchSuccess(idTour);
         return {
            ...state,
            uploadImage: data
         };
      }
      case tourConstants.FETCH_TOUR_UPLOAD_IMAGE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            uploadImage: error
         };
      }
      default:
         return state;
   }
};

export default reducer;
