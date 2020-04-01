import * as timelineConstants from "../_constants/timeline.module";
import {
   toastError,
   toastPatchSuccess,
   toastDeleteSuccess,
   toastCreateSuccess
} from "../_helper/toastify.helper";
const initialState = {
   listdTimeline: [],
   listImagedTimeline: [],
   timelineById: {},
   delete: [],
   patch: [],
   create: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case timelineConstants.FETCH_TIMELINE:
         return {
            ...state,
            listdTimeline: []
         };
      case timelineConstants.FETCH_TIMELINE_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            listdTimeline: data
         };
      }
      case timelineConstants.FETCH_TIMELINE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listdTimeline: error
         };
      }

      //Get Schedule By  Id dTimeline
      case timelineConstants.FETCH_TIMELINE_GET_BYID_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            timelineById: data
         };
      }
      case timelineConstants.FETCH_TIMELINE_GET_BYID_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            timelineById: error
         };
      }

      //Post - Create
      case timelineConstants.FETCH_TIMELINE_CREATE_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action.newRecord;
         toastCreateSuccess(newRecord);
         return {
            ...state,
            create: data
         };
      }
      case timelineConstants.FETCH_TIMELINE_CREATE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            create: error
         };
      }

      //Delete
      case timelineConstants.FETCH_TIMELINE_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { record } = action.record;
         toastDeleteSuccess(record);
         return {
            ...state,
            delete: data
         };
      }
      case timelineConstants.FETCH_TIMELINE_DELETE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            delete: error
         };
      }

      //Patch - update
      case timelineConstants.FETCH_TIMELINE_PATCH_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action.newRecord;
         toastPatchSuccess(newRecord);
         return {
            ...state,
            patch: data
         };
      }
      case timelineConstants.FETCH_TIMELINE_PATCH_FAILED: {
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
