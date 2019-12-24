import * as authApis from "../_apis/auth.api";
import * as authConstants from "../_constants/auth.module";

export const fetchLogin = () => {
   return {
      type: authConstants.FETCH_AUTH
   };
};

//Login
export const fetchLoginSuccess = (data, status) => {
   return {
      type: authConstants.FETCH_AUTH_SUCCESS,
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
      type: authConstants.FETCH_AUTH_FAILED,
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
      type: authConstants.FETCH_REGISTER_SUCCESS,
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
      type: authConstants.FETCH_REGISTER_FAILED,
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
      type: authConstants.FETCH_VERIFY_EMAIL_SUCCESS,
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
      type: authConstants.FETCH_VERIFY_EMAIL_FAILED,
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

//Forgot Password Step1
export const fetchForgotPasswordStep1Success = (data, status) => {
   return {
      type: authConstants.FETCH_FORGOT_PASSWORD_STEP1_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data,
         status
      }
   };
};

export const fetchForgotPasswordStep1Error = error => {
   return {
      type: authConstants.FETCH_FORGOT_PASSWORD_STEP1_FAILED,
      payload: {
         error
      }
   };
};

export const fetchForgotPasswordStep1Request = data => {
   return dispatch => {
      authApis
         .forgotPasswordStep1(data)
         .then(resp => {
            const { data, status } = resp;
            dispatch(fetchForgotPasswordStep1Success(data, status));
         })
         .catch(error => {
            dispatch(fetchForgotPasswordStep1Error(error));
         });
   };
};

//Forgot Password Step2
export const fetchForgotPasswordStep2Success = (data, status) => {
   return {
      type: authConstants.FETCH_FORGOT_PASSWORD_STEP2_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data,
         status
      }
   };
};

export const fetchForgotPasswordStep2Error = error => {
   return {
      type: authConstants.FETCH_FORGOT_PASSWORD_STEP2_FAILED,
      payload: {
         error
      }
   };
};

export const fetchForgotPasswordStep2Request = (path, data) => {
   return dispatch => {
      authApis
         .forgotPasswordStep2(path, data)
         .then(resp => {
            const { data, status } = resp;
            dispatch(fetchForgotPasswordStep2Success(data, status));
         })
         .catch(error => {
            dispatch(fetchForgotPasswordStep2Error(error));
         });
   };
};
