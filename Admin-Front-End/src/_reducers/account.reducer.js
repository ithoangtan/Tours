import * as accountConstants from "../_constants/account.module";
import {
   toastError,
   toastPatchSuccess,
   toastDeleteSuccess,
   toastCreateSuccess
} from "../_helper/toastify.helper";
const initialState = {
   listAccount: [],
   accountById: {},
   delete: [],
   patch: [],
   create: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case accountConstants.FETCH_ACCOUNT:
         return {
            ...state,
            listAccount: []
         };
      case accountConstants.FETCH_ACCOUNT_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            listAccount: data
         };
      }
      case accountConstants.FETCH_ACCOUNT_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listAccount: error
         };
      }

      //Get Schedule By  Id Account
      case accountConstants.FETCH_ACCOUNT_GET_BYID_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            accountById: data
         };
      }
      case accountConstants.FETCH_ACCOUNT_GET_BYID_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            accountById: error
         };
      }

      //Post - Create
      case accountConstants.FETCH_ACCOUNT_CREATE_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action.newRecord;
         toastCreateSuccess(newRecord);
         return {
            ...state,
            create: data
         };
      }
      case accountConstants.FETCH_ACCOUNT_CREATE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            create: error
         };
      }

      //Delete
      case accountConstants.FETCH_ACCOUNT_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { record } = action.record;
         toastDeleteSuccess(record);
         return {
            ...state,
            delete: data
         };
      }
      case accountConstants.FETCH_ACCOUNT_DELETE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            delete: error
         };
      }

      //Patch - update
      case accountConstants.FETCH_ACCOUNT_PATCH_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action.newRecord;
         toastPatchSuccess(newRecord);
         return {
            ...state,
            patch: data
         };
      }
      case accountConstants.FETCH_ACCOUNT_PATCH_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            patch: error
         };
      }

      default:
         return state;
   }
};

export default reducer;
