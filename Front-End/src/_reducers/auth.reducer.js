import Cookies from "js-cookie";

import * as authConstants from "../_constants/auth.module";
import { toastError } from "../_helper/toastify.helper";
import {
   messageLoadingLogin,
   messageErrorLogin
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
         // toastLoginSuccess(data);
         console.log(data);

         if (data.name === null || data.name === undefined || data.name === "")
            messageErrorLogin(`Opps!!, ${data.message}`, 2);
         else
            messageLoadingLogin(
               `${data.name} is login.....`,
               `Thanks you come back with us, ${data.name}`,
               1,
               3
            );
         //Lưu cookie token
         Cookies.set("token", data.token);
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
      default:
         return state;
   }
};

export default reducer;
