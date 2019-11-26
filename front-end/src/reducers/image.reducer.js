import * as imageConstants from "../constants/image.module";
import {
   toastError,
   toastListImageGetByIdTourSuccess
} from "../helper/toastify.helper";
const initialState = {
   listImageTour: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      //Load List Image ById Tour
      case imageConstants.FETCH_IMAGE_GET_BYID_TOUR_SUCCESS: {
         const { data } = action.payload;
         toastListImageGetByIdTourSuccess(data);
         return {
            ...state,
            listImageByIdTour: data
         };
      }
      case imageConstants.FETCH_IMAGE_GET_BYID_TOUR_FAILED: {
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
