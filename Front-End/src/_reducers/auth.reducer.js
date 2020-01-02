import Cookies from "js-cookie";

import { setSignCookie, getParamTokenWithName } from "../_commons/auth.service";
import * as authConstants from "../_constants/auth.module";
import { toastError } from "../_helper/toastify.helper";
import {
   messageLoading,
   messageError,
   messageSuccess
} from "../_helper/message.helper";
const initialState = {
   auth: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case authConstants.FETCH_AUTH:
         return {
            ...state,
            auth: []
         };
      case authConstants.FETCH_AUTH_SUCCESS: {
         const { data } = action.payload;
         //data chứa token và một số thứ khác: idAccount, role
         if (data.name === null || data.name === undefined || data.name === "")
            messageError(`Opps!!, ${data.message}`, 2);
         else
            messageLoading(
               `${data.name} is login.....`,
               `Thanks you come back with us, ${data.name}`,
               1,
               3
            );
         //Lưu cookie token
         Cookies.set("token", data.token, { expires: 7 });
         setSignCookie("role", getParamTokenWithName("role"), {
            expires: 7
         });

         //Save info user:
         sessionStorage.setItem("avatar", data.avatar);
         sessionStorage.setItem("name", data.name);

         return {
            ...state,
            auth: data
         };
      }
      case authConstants.FETCH_AUTH_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            auth: error
         };
      }

      //Register
      case authConstants.FETCH_REGISTER_SUCCESS: {
         const { data } = action.payload;
         if (data.name === null || data.name === undefined || data.name === "")
            messageError(`Opps!!, ${data.message}`, 3);
         else
            messageLoading(
               `${data.name} is register.....`,
               `Now!, you can login, ${data.name}`,
               0.2,
               5
            );

         //Save info user:
         sessionStorage.setItem("email", data.email);

         return {
            ...state,
            auth: data
         };
      }
      case authConstants.FETCH_REGISTER_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            auth: error
         };
      }
      //Verify Email
      case authConstants.FETCH_VERIFY_EMAIL_SUCCESS: {
         const { data } = action.payload;
         if (data.name === null || data.name === undefined || data.name === "")
            messageError(`Opps!!, ${data.message}`, 3);
         else
            messageLoading(
               `${data.name} is verify.....`,
               `You can continue, ${data.name}`,
               0.1,
               1
            );
         return {
            ...state,
            auth: data
         };
      }
      case authConstants.FETCH_VERIFY_EMAIL_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            auth: error
         };
      }
      //Forgot Password Step1
      case authConstants.FETCH_FORGOT_PASSWORD_STEP1_SUCCESS: {
         const { data } = action.payload;
         if (
            data.email === null ||
            data.email === undefined ||
            data.email === ""
         )
            messageError(`Opps!!, ${data.message}`, 3);
         else
            messageSuccess(
               `You need check your email: ${data.email} in order to continue!`,
               5
            );
         return {
            ...state,
            auth: data
         };
      }
      case authConstants.FETCH_FORGOT_PASSWORD_STEP1_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            auth: error
         };
      }
      //Forgot Password Step1
      case authConstants.FETCH_FORGOT_PASSWORD_STEP2_SUCCESS: {
         const { data } = action.payload;
         if (
            data.email === null ||
            data.email === undefined ||
            data.email === ""
         )
            messageError(`Opps!!, ${data.message}`, 3);
         else messageSuccess(`Now!, ${data.email} can login!`, 5);
         return {
            ...state,
            auth: data
         };
      }
      case authConstants.FETCH_FORGOT_PASSWORD_STEP2_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            auth: error
         };
      }
      default:
         return state;
   }
};

export default reducer;
