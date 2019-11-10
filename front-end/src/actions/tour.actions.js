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
         // Thường đi làm thì người ta hay gọi
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
 * B2: ResetL state tasks --> []
 * B3: Khi API thành công thì vào then:
 * fetchListTourSucces (data response)
 *
 */
export const fetchListTourRequest = () => {
   return dispatch => {
      dispatch(fetchListTour()); //reset state tasks-->[]
      tourApis
         .getListTour()
         .then(resp => {
            const { data } = resp;
            console.log("data: ", data);
            dispatch(fetchListTourSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListTourError(error));
            console.log("error: ", error);
         });
   };
};
