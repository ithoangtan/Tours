import * as accountConstants from "../_constants/account.module";
import { toastError } from "../_helper/toastify.helper";
import {
   messageLoading,
   messageError,
   messageSuccess
} from "../_helper/message.helper";
const initialState = {
   account: []
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
            account: data
         };
      }
      case accountConstants.FETCH_ORDER_OF_ACCOUNT_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            account: error
         };
      }
      //Favorites
      case accountConstants.FETCH_FAVORITES_OF_ACCOUNT_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            account: data
         };
      }
      case accountConstants.FETCH_FAVORITES_OF_ACCOUNT_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            account: error
         };
      }
      default:
         return state;
   }
};

export default reducer;
