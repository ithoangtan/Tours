import * as authApis from "../_apis/auth.api";
import * as tourConstants from "../_constants/auth.module";

export const fetchLogin = () => {
   return {
      type: tourConstants.FETCH_AUTH
   };
};

//Login
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

//Register
export const fetchRegisterSuccess = (data, status) => {
   return {
      type: tourConstants.FETCH_REGISTER_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data,
         status
      }
   };
};

export const fetchRegisterError = error => {
   return {
      type: tourConstants.FETCH_REGISTER_FAILED,
      payload: {
         error
      }
   };
};

export const fetchRegisterRequest = data => {
   return dispatch => {
      authApis
         .register(data)
         .then(resp => {
            const { data, status } = resp;
            dispatch(fetchRegisterSuccess(data, status));
         })
         .catch(error => {
            dispatch(fetchRegisterError(error));
         });
   };
};

//Verify
export const fetchVerifyEmailSuccess = (data, status) => {
   return {
      type: tourConstants.FETCH_VERIFY_EMAIL_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data,
         status
      }
   };
};

export const fetchVerifyEmailError = error => {
   return {
      type: tourConstants.FETCH_VERIFY_EMAIL_FAILED,
      payload: {
         error
      }
   };
};

export const fetchVerifyEmailRequest = path => {
   return dispatch => {
      authApis
         .verifyEmail(path)
         .then(resp => {
            const { data, status } = resp;
            dispatch(fetchVerifyEmailSuccess(data, status));
         })
         .catch(error => {
            dispatch(fetchVerifyEmailError(error));
         });
   };
};
