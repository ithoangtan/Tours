import * as accountConstants from "../_constants/account.module";
import { toastError } from "../_helper/toastify.helper";
// import {
//    messageLoading,
//    messageError,
//    messageSuccess
// } from "../_helper/message.helper";
const initialState = {
   account: [],
   update: [],
   favorite: [],
   order: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case accountConstants.FETCH_ACCOUNT:
         return {
            ...state,
            account: []
         };
      //profile
      case accountConstants.FETCH_ACCOUNT_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            account: data
         };
      }
      case accountConstants.FETCH_ACCOUNT_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            account: error
         };
      }

      //Order of Account
      case accountConstants.FETCH_ORDER_OF_ACCOUNT_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            order: data
         };
      }
      case accountConstants.FETCH_ORDER_OF_ACCOUNT_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            order: error
         };
      }
      //Favorites
      case accountConstants.FETCH_FAVORITES_OF_ACCOUNT_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            favorite: data
         };
      }
      case accountConstants.FETCH_FAVORITES_OF_ACCOUNT_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            favorite: error
         };
      } //Update - patch
      case accountConstants.FETCH_UPDATE_ACCOUNT_SUCCESS: {
         const { data } = action.payload;
         console.log(data);

         return {
            ...state,
            update: data
         };
      }
      case accountConstants.FETCH_UPDATE_ACCOUNT_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            update: error
         };
      }
      default:
         return state;
   }
};

export default reducer;
