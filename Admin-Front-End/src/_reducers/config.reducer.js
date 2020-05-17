import * as configConstants from "../_constants/config.module";
import {
   toastError,
   toastDeleteSuccess,
   toastCreateSuccess,
} from "../_helper/toastify.helper";
import { message } from "antd";
const initialState = {
   listConfig: [],
   listImageConfig: [],
   configById: {},
   configByInfoType: {},
   delete: [],
   patch: [],
   create: [],
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case configConstants.FETCH_CONFIG:
         return {
            ...state,
            listConfig: [],
         };
      case configConstants.FETCH_CONFIG_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            listConfig: data,
         };
      }
      case configConstants.FETCH_CONFIG_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listConfig: error,
         };
      }

      //Get Config By  Id Config
      case configConstants.FETCH_CONFIG_GET_BYID_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            configById: data,
         };
      }
      case configConstants.FETCH_CONFIG_GET_BYID_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            configById: error,
         };
      }

      //Get Config By  Id infoType
      case configConstants.FETCH_CONFIG_GET_BY_INFOTYPE_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            configByInfoType: data,
         };
      }
      case configConstants.FETCH_CONFIG_GET_BY_INFOTYPE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            configByInfoType: error,
         };
      }

      //Post - Create
      case configConstants.FETCH_CONFIG_CREATE_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action.newRecord;
         toastCreateSuccess(newRecord);
         return {
            ...state,
            create: data,
         };
      }
      case configConstants.FETCH_CONFIG_CREATE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            create: error,
         };
      }

      //Delete
      case configConstants.FETCH_CONFIG_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { record } = action.record;
         toastDeleteSuccess(record);
         return {
            ...state,
            delete: data,
         };
      }
      case configConstants.FETCH_CONFIG_DELETE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            delete: error,
         };
      }

      //Patch - update
      case configConstants.FETCH_CONFIG_PATCH_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action;
         message.info(` ${newRecord.infoType} --- saved!`);

         return {
            ...state,
            patch: data,
         };
      }
      case configConstants.FETCH_CONFIG_PATCH_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            patch: error,
         };
      }

      //Image Config
      case configConstants.FETCH_CONFIG_IMAGE:
         return {
            ...state,
            listImageConfig: [],
         };
      case configConstants.FETCH_CONFIG_IMAGE_SUCCESS: {
         const { data } = action.payload;
         // toastSuccess(data);
         return {
            ...state,
            listImageConfig: data,
         };
      }
      case configConstants.FETCH_CONFIG_IMAGE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listImageConfig: error,
         };
      }
      default:
         return state;
   }
};

export default reducer;
