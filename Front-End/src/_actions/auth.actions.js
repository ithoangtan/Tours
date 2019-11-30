import * as authApis from "../_apis/auth.api";
import * as tourConstants from "../_constants/auth.module";

export const fetchLogin = () => {
   return {
      type: tourConstants.FETCH_AUTH
   };
};

//List Tour
export const fetchLoginSuccess = (data, status) => {
   return {
      type: tourConstants.FETCH_AUTH_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data,
         status
      }
   };
};

export const fetchLoginError = error => {
   return {
      type: tourConstants.FETCH_AUTH_FAILED,
      payload: {
         error
      }
   };
};
/**
 * B1: fetch isTourRequest()
 * B2: ResetL state tours --> []
 * B3: Khi API thành công thì vào then:
 * fetchLoginSucces (data response)
 *
 */
export const fetchLoginRequest = data => {
   return dispatch => {
      dispatch(fetchLogin()); //reset state tours-->[]
      authApis
         .login(data)
         .then(resp => {
            const { data, status } = resp;
            dispatch(fetchLoginSuccess(data, status));
         })
         .catch(error => {
            dispatch(fetchLoginError(error));
         });
   };
};
