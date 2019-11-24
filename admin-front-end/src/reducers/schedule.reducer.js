import * as scheduleConstants from "../constants/schedule.module";
import {
   toastError,
   toastScheduleSuccess,
   toastPatchScheduleSuccess,
   toastDeleteScheduleSuccess,
   toastCreateScheduleSuccess,
   toastScheduleGetByIdSuccess
} from "../helper/toastify.helper";
const initialState = {
   listSchedule: [],
   scheduleByIdTour: {},
   delete: [],
   patch: [],
   create: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case scheduleConstants.FETCH_SCHEDULE:
         return {
            ...state,
            listSchedule: []
         };
      case scheduleConstants.FETCH_SCHEDULE_SUCCESS: {
         const { data } = action.payload;
         toastScheduleSuccess(data);
         return {
            ...state,
            listSchedule: data
         };
      }
      case scheduleConstants.FETCH_SCHEDULE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listSchedule: error
         };
      }

      //Schedule Get By Id Tour
      case scheduleConstants.FETCH_SCHEDULE_GET_BYID_SUCCESS: {
         const { data } = action.payload;
         toastScheduleGetByIdSuccess(data);
         return {
            ...state,
            scheduleByIdTour: data
         };
      }
      case scheduleConstants.FETCH_SCHEDULE_GET_BYID_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            scheduleByIdTour: error
         };
      }

      //Post - Create
      case scheduleConstants.FETCH_SCHEDULE_CREATE_SUCCESS: {
         const { data } = action.payload;
         const { newSchedule } = action.newSchedule;
         toastCreateScheduleSuccess(newSchedule);
         return {
            ...state,
            create: data
         };
      }
      case scheduleConstants.FETCH_SCHEDULE_CREATE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            create: error
         };
      }

      //Delete
      case scheduleConstants.FETCH_SCHEDULE_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { record } = action.record;
         toastDeleteScheduleSuccess(record);
         return {
            ...state,
            delete: data
         };
      }
      case scheduleConstants.FETCH_SCHEDULE_DELETE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            delete: error
         };
      }

      //Patch - update
      case scheduleConstants.FETCH_SCHEDULE_PATCH_SUCCESS: {
         const { data } = action.payload;
         const { schedule } = action.schedule;
         toastPatchScheduleSuccess(schedule);
         return {
            ...state,
            patch: data
         };
      }
      case scheduleConstants.FETCH_SCHEDULE_PATCH_FAILED: {
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
