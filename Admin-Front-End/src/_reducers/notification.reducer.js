import * as notificationConstants from "../_constants/notification.module";
import { toastError } from "../_helper/toastify.helper";
import { message } from "antd";
const initialState = {
   listNotification: [],
   listImageNotification: [],
   notificationById: {},
   delete: [],
   patch: [],
   create: [],
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case notificationConstants.FETCH_NOTIFICATION:
         return {
            ...state,
            listNotification: [],
         };
      case notificationConstants.FETCH_NOTIFICATION_SUCCESS: {
         const { data } = action.payload;
         // toastSuccess(data);
         return {
            ...state,
            listNotification: data,
         };
      }
      case notificationConstants.FETCH_NOTIFICATION_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listNotification: error,
         };
      }

      //Get Schedule By  Id Notification
      case notificationConstants.FETCH_NOTIFICATION_GET_BYID_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            notificationById: data,
         };
      }
      case notificationConstants.FETCH_NOTIFICATION_GET_BYID_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            notificationById: error,
         };
      }

      //Post - Create
      case notificationConstants.FETCH_NOTIFICATION_CREATE_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action;
         message.success(newRecord.title + " --- created!");
         return {
            ...state,
            create: data,
         };
      }
      case notificationConstants.FETCH_NOTIFICATION_CREATE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            create: error,
         };
      }

      //Delete
      case notificationConstants.FETCH_NOTIFICATION_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { record } = action;
         message.warning(record.title + " --- deleted!");
         return {
            ...state,
            delete: data,
         };
      }
      case notificationConstants.FETCH_NOTIFICATION_DELETE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            delete: error,
         };
      }

      //Patch - update
      case notificationConstants.FETCH_NOTIFICATION_PATCH_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action;
         message.info(newRecord.title + " --- updated!");
         return {
            ...state,
            patch: data,
         };
      }
      case notificationConstants.FETCH_NOTIFICATION_PATCH_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            patch: error,
         };
      }

      //Image Notification
      case notificationConstants.FETCH_NOTIFICATION_IMAGE:
         return {
            ...state,
            listImageNotification: [],
         };
      case notificationConstants.FETCH_NOTIFICATION_IMAGE_SUCCESS: {
         const { data } = action.payload;
         // toastSuccess(data);
         return {
            ...state,
            listImageNotification: data,
         };
      }
      case notificationConstants.FETCH_NOTIFICATION_IMAGE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listImageNotification: error,
         };
      }
      default:
         return state;
   }
};

export default reducer;
