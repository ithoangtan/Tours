import * as tourApis from "../apis/tour.api";
import * as tourConstants from "../constants/tour.module";

export const fetchListTour = () => {
   return {
      type: tourConstants.FETCH_TOUR
   };
};

export const fetchListTourSuccess = data => {
   return {
      type: tourConstants.FETCH_TOUR_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      }
   };
};

export const fetchListTourError = error => {
   return {
      type: tourConstants.FETCH_TOUR_FAILED,
      payload: {
         error
      }
   };
};
/**
 * B1: fetch isTaskRequest()
 * B2: ResetL state tours --> []
 * B3: Khi API thành công thì vào then:
 * fetchListTourSucces (data response)
 *
 */
export const fetchListTourRequest = () => {
   return dispatch => {
      dispatch(fetchListTour()); //reset state tours-->[]
      tourApis
         .getListTour()
         .then(resp => {
            const { data } = resp;
            dispatch(fetchListTourSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListTourError(error));
         });
   };
};

export const fetchDeleteTourSuccess = (record, data) => {
   return {
      type: tourConstants.FETCH_TOUR_DELETE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      record: { record }
   };
};

export const fetchDeleteTourError = error => {
   return {
      type: tourConstants.FETCH_TOUR_DELETE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchDeleteTourRequest = record => {
   return dispatch => {
      tourApis
         .deleteTour(record.idTour)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchDeleteTourSuccess(record, data));
         })
         .catch(error => {
            dispatch(fetchDeleteTourError(error));
         });
   };
};

export const fetchPatchTourSuccess = (newRecord, data) => {
   return {
      type: tourConstants.FETCH_TOUR_PATCH_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPatchTourError = error => {
   return {
      type: tourConstants.FETCH_TOUR_PATCH_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPatchTourRequest = newRecord => {
   return dispatch => {
      tourApis
         .patchTour(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPatchTourSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPatchTourError(error));
         });
   };
};
