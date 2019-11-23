import * as tourConstants from "./../constants/tour.module";
import {
   toastError,
   toastSuccess,
   toastPatchSuccess,
   toastDeleteSuccess
} from "../helper/toastify.helper";
const initialState = {
   listTour: [],
   listImageTour: [],
   delete: [],
   patch: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case tourConstants.FETCH_TOUR:
         return {
            ...state,
            listTour: []
         };
      case tourConstants.FETCH_TOUR_SUCCESS: {
         const { data } = action.payload;
         toastSuccess(data);
         return {
            ...state,
            listTour: data
         };
      }
      case tourConstants.FETCH_TOUR_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listTour: error
         };
      }
      //Delete
      case tourConstants.FETCH_TOUR_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { record } = action.record;
         toastDeleteSuccess(record);
         return {
            ...state,
            delete: data
         };
      }
      case tourConstants.FETCH_TOUR_DELETE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            delete: error
         };
      }
      //Patch - update
      case tourConstants.FETCH_TOUR_PATCH_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action.newRecord;
         toastPatchSuccess(newRecord);
         return {
            ...state,
            patch: data
         };
      }
      case tourConstants.FETCH_TOUR_PATCH_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            patch: error
         };
      }
      //Image Tour
      case tourConstants.FETCH_TOUR_IMAGE:
         return {
            ...state,
            listImageTour: []
         };
      case tourConstants.FETCH_TOUR_IMAGE_SUCCESS: {
         const { data } = action.payload;
         toastSuccess(data);
         return {
            ...state,
            listImageTour: data
         };
      }
      case tourConstants.FETCH_TOUR_IMAGE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listImageTour: error
         };
      }
      default:
         return state;
   }
};

export default reducer;
