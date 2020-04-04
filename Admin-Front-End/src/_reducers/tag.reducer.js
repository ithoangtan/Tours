import * as tagConstants from "../_constants/tag.module";
import { toastError } from "../_helper/toastify.helper";
import { message } from "antd";
const initialState = {
   listTag: [],
   listImageTag: [],
   tagById: {},
   delete: [],
   patch: [],
   create: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case tagConstants.FETCH_TAG:
         return {
            ...state,
            listTag: []
         };
      case tagConstants.FETCH_TAG_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            listTag: data
         };
      }
      case tagConstants.FETCH_TAG_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listTag: error
         };
      }

      //Get Schedule By  Id Tag
      case tagConstants.FETCH_TAG_GET_BYID_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            tagById: data
         };
      }
      case tagConstants.FETCH_TAG_GET_BYID_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            tagById: error
         };
      }

      //Post - Create
      case tagConstants.FETCH_TAG_CREATE_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action.newRecord;
         message.success(`ID: ${newRecord.idTag} | ${newRecord.name} created!`);
         return {
            ...state,
            create: data
         };
      }
      case tagConstants.FETCH_TAG_CREATE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            create: error
         };
      }

      //Delete
      case tagConstants.FETCH_TAG_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { record } = action.record;
         message.warning(`${record.idTag} | ${record.name} deleted!`);
         return {
            ...state,
            delete: data
         };
      }
      case tagConstants.FETCH_TAG_DELETE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            delete: error
         };
      }

      //Patch - update
      case tagConstants.FETCH_TAG_PATCH_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action.newRecord;
         message.info(`ID:  ${newRecord.idTag}  |  ${newRecord.name} updated!`);
         return {
            ...state,
            patch: data
         };
      }
      case tagConstants.FETCH_TAG_PATCH_FAILED: {
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
