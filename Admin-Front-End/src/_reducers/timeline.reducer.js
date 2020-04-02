import * as timelineConstants from "../_constants/timeline.module";
import { toastError } from "../_helper/toastify.helper";
import { message } from "antd";
const initialState = {
   listdTimeline: [],
   listImagedTimeline: [],
   timelineById: {},
   delete: [],
   patch: [],
   post: []
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
         message.success(`${newRecord.title} -- postd!`);
         return {
            ...state,
            post: data
         };
      }
      case timelineConstants.FETCH_TIMELINE_CREATE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            post: error
         };
      }

      //Delete
      case timelineConstants.FETCH_TIMELINE_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { record } = action.record;
         message.warning(`${record.title} -- deleted!`);
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
         message.info(`${newRecord.title} -- updated!`);
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
