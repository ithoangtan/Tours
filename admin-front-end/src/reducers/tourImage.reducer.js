import * as tourConstants from "./../constants/tourImage.module";
import { toastError, toastDeleteSuccess } from "../helper/toastify.helper";
const initialState = {
   listImageTour: [],
   delete: [],
   uploadImage: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
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
      default:
         return state;
   }
};

export default reducer;
