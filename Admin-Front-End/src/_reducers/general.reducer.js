import * as generalConstants from "../_constants/general.module";
import {
   toastError,
   // toastSuccess,
   toastPatchSuccess,
   toastDeleteSuccess,
   toastCreateSuccess
} from "../_helper/toastify.helper";
const initialState = {
   listGeneral: [],
   listImageGeneral: [],
   generalById: {},
   delete: [],
   patch: [],
   create: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case generalConstants.FETCH_GENERAL:
         return {
            ...state,
            listGeneral: []
         };
      case generalConstants.FETCH_GENERAL_SUCCESS: {
         const { data } = action.payload;
         // toastSuccess(data);
         return {
            ...state,
            listGeneral: data
         };
      }
      case generalConstants.FETCH_GENERAL_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listGeneral: error
         };
      }

      //Get Schedule By  Id General
      case generalConstants.FETCH_GENERAL_GET_BYID_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            generalById: data
         };
      }
      case generalConstants.FETCH_GENERAL_GET_BYID_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            generalById: error
         };
      }

      //Post - Create
      case generalConstants.FETCH_GENERAL_CREATE_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action.newRecord;
         toastCreateSuccess(newRecord);
         return {
            ...state,
            create: data
         };
      }
      case generalConstants.FETCH_GENERAL_CREATE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            create: error
         };
      }

      //Delete
      case generalConstants.FETCH_GENERAL_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { record } = action.record;
         toastDeleteSuccess(record);
         return {
            ...state,
            delete: data
         };
      }
      case generalConstants.FETCH_GENERAL_DELETE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            delete: error
         };
      }

      //Patch - update
      case generalConstants.FETCH_GENERAL_PATCH_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action.newRecord;
         toastPatchSuccess(newRecord);
         return {
            ...state,
            patch: data
         };
      }
      case generalConstants.FETCH_GENERAL_PATCH_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            patch: error
         };
      }

      //Image General
      case generalConstants.FETCH_GENERAL_IMAGE:
         return {
            ...state,
            listImageGeneral: []
         };
      case generalConstants.FETCH_GENERAL_IMAGE_SUCCESS: {
         const { data } = action.payload;
         // toastSuccess(data);
         return {
            ...state,
            listImageGeneral: data
         };
      }
      case generalConstants.FETCH_GENERAL_IMAGE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listImageGeneral: error
         };
      }
      default:
         return state;
   }
};

export default reducer;
