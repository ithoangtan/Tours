import * as notificationsApis from "../_apis/notification.api";
import * as notificationsConstants from "../_constants/notification.module";

export const fetchListNotification = () => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATION,
   };
};

//List Notification
export const fetchListNotificationSuccess = (data) => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATION_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data,
      },
   };
};

export const fetchListNotificationError = (error) => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATION_FAILED,
      payload: {
         error,
      },
   };
};
/**
 * B1: fetch isNotificationRequest()
 * B2: ResetL state notificationss --> []
 * B3: Khi API thành công thì vào then:
 * fetchListNotificationSucces (data response)
 *
 */
export const fetchListNotificationRequest = () => {
   return (dispatch) => {
      dispatch(fetchListNotification()); //reset state notificationss-->[]
      notificationsApis
         .getListNotification()
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchListNotificationSuccess(data));
         })
         .catch((error) => {
            dispatch(fetchListNotificationError(error));
         });
   };
};

//GET NOTIFICATION BY ID
export const fetchNotificationByIdSuccess = (data) => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATION_GET_BYID_SUCCESS,
      payload: {
         data,
      },
   };
};

export const fetchNotificationByIdError = (error) => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATION_GET_BYID_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchNotificationByIdRequest = (idNotification) => {
   return (dispatch) => {
      notificationsApis
         .getNotificationById(idNotification)
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchNotificationByIdSuccess(data));
         })
         .catch((error) => {
            dispatch(fetchNotificationByIdError(error));
         });
   };
};
//end Get Notification By ID

//POST Notification - create
export const fetchPostNotificationSuccess = (newRecord, data) => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATION_CREATE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data,
      },
      newRecord: newRecord,
   };
};

export const fetchPostNotificationError = (error) => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATION_CREATE_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchPostNotificationRequest = (newRecord) => {
   return (dispatch) => {
      notificationsApis
         .postNotification(newRecord)
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchPostNotificationSuccess(newRecord, data));
         })
         .catch((error) => {
            dispatch(fetchPostNotificationError(error));
         });
   };
};
//end Create Notification

//Delete Notification
export const fetchDeleteNotificationSuccess = (record, data) => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATION_DELETE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data,
      },
      record: record,
   };
};

export const fetchDeleteNotificationError = (error) => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATION_DELETE_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchDeleteNotificationRequest = (record) => {
   return (dispatch) => {
      notificationsApis
         .deleteNotification(record.idNotification)
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchDeleteNotificationSuccess(record, data));
         })
         .catch((error) => {
            dispatch(fetchDeleteNotificationError(error));
         });
   };
};

//PATCH Notification
export const fetchPatchNotificationSuccess = (newRecord, data) => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATION_PATCH_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data,
      },
      newRecord: newRecord,
   };
};

export const fetchPatchNotificationError = (error) => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATION_PATCH_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchPatchNotificationRequest = (newRecord) => {
   return (dispatch) => {
      notificationsApis
         .patchNotification(newRecord)
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchPatchNotificationSuccess(newRecord, data));
         })
         .catch((error) => {
            dispatch(fetchPatchNotificationError(error));
         });
   };
};

//Image Notification
export const fetchListNotificationImage = () => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATION_IMAGE,
   };
};

//List Notification image
export const fetchListNotificationImageSuccess = (data) => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATION_IMAGE_SUCCESS,
      payload: {
         data,
      },
   };
};

export const fetchListNotificationImageError = (error) => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATION_IMAGE_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchListNotificationImageRequest = () => {
   return (dispatch) => {
      dispatch(fetchListNotificationImage()); //reset state Images-->[]
      notificationsApis
         .getListImageNotification()
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchListNotificationImageSuccess(data));
         })
         .catch((error) => {
            dispatch(fetchListNotificationImageError(error));
         });
   };
};
