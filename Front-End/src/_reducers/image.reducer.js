import * as imageConstants from "../_constants/image.module";
import * as tourConstants from "../_constants/tour.module";
import {
   toastError,
   toastDeleteImageSuccess
} from "../_helper/toastify.helper";
const initialState = {
   listImageTour: [],
   delete: [],
   uploadImage: [],
   listImageByIdTour: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      //Load List Image ById Tour
      case imageConstants.FETCH_IMAGE_GET_BYID_TOUR_SUCCESS: {
         const { data } = action.payload;
         // toastListImageGetByIdTourSuccess(data);
         return {
            ...state,
            listImageTour: data
         };
      }
      case imageConstants.FETCH_IMAGE_GET_BYID_TOUR_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listImageTour: error
         };
      }
      //Delete
      case tourConstants.FETCH_TOUR_IMAGE_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { file } = action.file;
         toastDeleteImageSuccess(file);
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
      default:
         return state;
   }
};

export default reducer;
