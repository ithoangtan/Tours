import * as postConstants from "../_constants/post.module";
import {
   toastError,
   toastPatchSuccess,
   toastDeleteSuccess,
   toastCreateSuccess
} from "../_helper/toastify.helper";
const initialState = {
   listPost: [],
   listImagePost: [],
   postById: {},
   delete: [],
   patch: [],
   create: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case postConstants.FETCH_POST:
         return {
            ...state,
            listPost: []
         };
      case postConstants.FETCH_POST_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            listPost: data
         };
      }
      case postConstants.FETCH_POST_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listPost: error
         };
      }

      //Get Schedule By  Id Post
      case postConstants.FETCH_POST_GET_BYID_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            postById: data[0]
         };
      }
      case postConstants.FETCH_POST_GET_BYID_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            postById: error
         };
      }

      //Post - Create
      case postConstants.FETCH_POST_CREATE_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action.newRecord;
         toastCreateSuccess(newRecord);
         return {
            ...state,
            create: data
         };
      }
      case postConstants.FETCH_POST_CREATE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            create: error
         };
      }

      //Delete
      case postConstants.FETCH_POST_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { record } = action.record;
         toastDeleteSuccess(record);
         return {
            ...state,
            delete: data
         };
      }
      case postConstants.FETCH_POST_DELETE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            delete: error
         };
      }

      //Patch - update
      case postConstants.FETCH_POST_PATCH_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action.newRecord;
         toastPatchSuccess(newRecord);
         return {
            ...state,
            patch: data
         };
      }
      case postConstants.FETCH_POST_PATCH_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            patch: error
         };
      }

      //Image Post
      case postConstants.FETCH_POST_IMAGE:
         return {
            ...state,
            listImagePost: []
         };
      case postConstants.FETCH_POST_IMAGE_SUCCESS: {
         const { data } = action.payload;
         // toastSuccess(data);
         return {
            ...state,
            listImagePost: data
         };
      }
      case postConstants.FETCH_POST_IMAGE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listImagePost: error
         };
      }
      default:
         return state;
   }
};

export default reducer;
