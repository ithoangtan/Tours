import * as notificationsConstants from "../_constants/notifications.module";
import {
   toastError,
   // toastSuccess,
   toastPatchSuccess,
   toastDeleteSuccess,
   toastCreateSuccess
} from "../_helper/toastify.helper";
const initialState = {
   listNotifications: [],
   listImageNotifications: [],
   notificationsById: {},
   delete: [],
   patch: [],
   create: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case notificationsConstants.FETCH_NOTIFICATIONS:
         return {
            ...state,
            listNotifications: []
         };
      case notificationsConstants.FETCH_NOTIFICATIONS_SUCCESS: {
         const { data } = action.payload;
         // toastSuccess(data);
         return {
            ...state,
            listNotifications: data
         };
      }
      case notificationsConstants.FETCH_NOTIFICATIONS_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listNotifications: error
         };
      }

      //Get Schedule By  Id Notifications
      case notificationsConstants.FETCH_NOTIFICATIONS_GET_BYID_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            notificationsById: data
         };
      }
      case notificationsConstants.FETCH_NOTIFICATIONS_GET_BYID_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            notificationsById: error
         };
      }

      //Post - Create
      case notificationsConstants.FETCH_NOTIFICATIONS_CREATE_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action.newRecord;
         toastCreateSuccess(newRecord);
         return {
            ...state,
            create: data
         };
      }
      case notificationsConstants.FETCH_NOTIFICATIONS_CREATE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            create: error
         };
      }

      //Delete
      case notificationsConstants.FETCH_NOTIFICATIONS_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { record } = action.record;
         toastDeleteSuccess(record);
         return {
            ...state,
            delete: data
         };
      }
      case notificationsConstants.FETCH_NOTIFICATIONS_DELETE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            delete: error
         };
      }

      //Patch - update
      case notificationsConstants.FETCH_NOTIFICATIONS_PATCH_SUCCESS: {
         const { data } = action.payload;
         const { newRecord } = action.newRecord;
         toastPatchSuccess(newRecord);
         return {
            ...state,
            patch: data
         };
      }
      case notificationsConstants.FETCH_NOTIFICATIONS_PATCH_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            patch: error
         };
      }

      //Image Notifications
      case notificationsConstants.FETCH_NOTIFICATIONS_IMAGE:
         return {
            ...state,
            listImageNotifications: []
         };
      case notificationsConstants.FETCH_NOTIFICATIONS_IMAGE_SUCCESS: {
         const { data } = action.payload;
         // toastSuccess(data);
         return {
            ...state,
            listImageNotifications: data
         };
      }
      case notificationsConstants.FETCH_NOTIFICATIONS_IMAGE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listImageNotifications: error
         };
      }
      default:
         return state;
   }
};

export default reducer;
