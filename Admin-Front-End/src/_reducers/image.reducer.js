import * as imageConstants from "../_constants/image.module";
import * as tourConstants from "../_constants/tour.module";
import {
   toastError,
   toastDeleteImageSuccess,
} from "../_helper/toastify.helper";
const initialState = {
   listImageTour: [],
   delete: [],
   listImageByIdPost: [],
   uploadImage: [],
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      //Load List Image ById Tour
      case imageConstants.FETCH_IMAGE_GET_BYID_TOUR_SUCCESS: {
         const { data } = action.payload;
         // toastListImageGetByIdTourSuccess(data);
         return {
            ...state,
            listImageByIdTour: data,
         };
      }
      case imageConstants.FETCH_IMAGE_GET_BYID_TOUR_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            delete: error,
         };
      }

      //Load List Image ById Post
      case imageConstants.FETCH_IMAGE_GET_BYID_POST_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            listImageByIdPost: data,
         };
      }
      case imageConstants.FETCH_IMAGE_GET_BYID_POST_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            delete: error,
         };
      }

      //Delete
      case tourConstants.FETCH_TOUR_IMAGE_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { file } = action.file;
         toastDeleteImageSuccess(file);
         return {
            ...state,
            delete: data,
         };
      }
      case tourConstants.FETCH_TOUR_IMAGE_DELETE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            delete: error,
         };
      }
      default:
         return state;
   }
};

export default reducer;
