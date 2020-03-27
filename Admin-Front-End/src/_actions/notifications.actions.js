import * as notificationsApis from "../_apis/notifications.api";
import * as notificationsConstants from "../_constants/notifications.module";

export const fetchListNotifications = () => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATIONS
   };
};

//List Notifications
export const fetchListNotificationsSuccess = data => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATIONS_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      }
   };
};

export const fetchListNotificationsError = error => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATIONS_FAILED,
      payload: {
         error
      }
   };
};
/**
 * B1: fetch isNotificationsRequest()
 * B2: ResetL state notificationss --> []
 * B3: Khi API thành công thì vào then:
 * fetchListNotificationsSucces (data response)
 *
 */
export const fetchListNotificationsRequest = () => {
   return dispatch => {
      dispatch(fetchListNotifications()); //reset state notificationss-->[]
      notificationsApis
         .getListNotifications()
         .then(resp => {
            const { data } = resp;
            dispatch(fetchListNotificationsSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListNotificationsError(error));
         });
   };
};

//GET NOTIFICATIONS BY ID
export const fetchNotificationsByIdSuccess = data => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATIONS_GET_BYID_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchNotificationsByIdError = error => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATIONS_GET_BYID_FAILED,
      payload: {
         error
      }
   };
};

export const fetchNotificationsByIdRequest = idNotifications => {
   return dispatch => {
      notificationsApis
         .getNotificationsById(idNotifications)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchNotificationsByIdSuccess(data));
         })
         .catch(error => {
            dispatch(fetchNotificationsByIdError(error));
         });
   };
};
//end Get Notifications By ID

//POST Notifications - create
export const fetchPostNotificationsSuccess = (newRecord, data) => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATIONS_CREATE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPostNotificationsError = error => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATIONS_CREATE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPostNotificationsRequest = newRecord => {
   return dispatch => {
      notificationsApis
         .postNotifications(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPostNotificationsSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPostNotificationsError(error));
         });
   };
};
//end Create Notifications

//Delete Notifications
export const fetchDeleteNotificationsSuccess = (record, data) => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATIONS_DELETE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      record: { record }
   };
};

export const fetchDeleteNotificationsError = error => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATIONS_DELETE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchDeleteNotificationsRequest = record => {
   return dispatch => {
      notificationsApis
         .deleteNotifications(record.idNotifications)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchDeleteNotificationsSuccess(record, data));
         })
         .catch(error => {
            dispatch(fetchDeleteNotificationsError(error));
         });
   };
};

//PATCH Notifications
export const fetchPatchNotificationsSuccess = (newRecord, data) => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATIONS_PATCH_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPatchNotificationsError = error => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATIONS_PATCH_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPatchNotificationsRequest = newRecord => {
   return dispatch => {
      notificationsApis
         .patchNotifications(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPatchNotificationsSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPatchNotificationsError(error));
         });
   };
};

//Image Notifications
export const fetchListNotificationsImage = () => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATIONS_IMAGE
   };
};

//List Notifications image
export const fetchListNotificationsImageSuccess = data => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATIONS_IMAGE_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchListNotificationsImageError = error => {
   return {
      type: notificationsConstants.FETCH_NOTIFICATIONS_IMAGE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchListNotificationsImageRequest = () => {
   return dispatch => {
      dispatch(fetchListNotificationsImage()); //reset state Images-->[]
      notificationsApis
         .getListImageNotifications()
         .then(resp => {
            const { data } = resp;
            dispatch(fetchListNotificationsImageSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListNotificationsImageError(error));
         });
   };
};
