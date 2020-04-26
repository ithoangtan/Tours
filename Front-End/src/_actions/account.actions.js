import * as accountApis from "../_apis/account.api";
import * as accountConstants from "../_constants/account.module";

export const fetchAccount = () => {
   return {
      type: accountConstants.FETCH_ACCOUNT,
   };
};

//Account profile
export const fetchAccountSuccess = (data, status) => {
   return {
      type: accountConstants.FETCH_ACCOUNT_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data,
         status,
      },
   };
};

export const fetchAccountError = (error) => {
   return {
      type: accountConstants.FETCH_ACCOUNT_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchAccountRequest = (email) => {
   return (dispatch) => {
      dispatch(fetchAccount()); //reset state tours-->[]
      accountApis
         .getProfileWithEmail(email)
         .then((resp) => {
            const { data, status } = resp;
            dispatch(fetchAccountSuccess(data, status));
         })
         .catch((error) => {
            dispatch(fetchAccountError(error));
         });
   };
};

//Order of Account
export const fetchOrderOfAccountWithEmailSuccess = (data, status) => {
   return {
      type: accountConstants.FETCH_ORDER_OF_ACCOUNT_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data,
         status,
      },
   };
};

export const fetchOrderOfAccountWithEmailError = (error) => {
   return {
      type: accountConstants.FETCH_ORDER_OF_ACCOUNT_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchOrderOfAccountWithEmailRequest = (email) => {
   return (dispatch) => {
      accountApis
         .getOrderOfAccountWithEmail(email)
         .then((resp) => {
            const { data, status } = resp;
            dispatch(fetchOrderOfAccountWithEmailSuccess(data, status));
         })
         .catch((error) => {
            dispatch(fetchOrderOfAccountWithEmailError(error));
         });
   };
};

//Favorites of Account
export const fetchFavoritesWithEmailSuccess = (data, status) => {
   return {
      type: accountConstants.FETCH_FAVORITES_OF_ACCOUNT_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data,
         status,
      },
   };
};

export const fetchFavoritesWithEmailError = (error) => {
   return {
      type: accountConstants.FETCH_FAVORITES_OF_ACCOUNT_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchFavoritesWithEmailRequest = (email) => {
   return (dispatch) => {
      accountApis
         .getFavoritesWithEmail(email)
         .then((resp) => {
            const { data, status } = resp;
            dispatch(fetchFavoritesWithEmailSuccess(data, status));
         })
         .catch((error) => {
            dispatch(fetchFavoritesWithEmailError(error));
         });
   };
};

//Upload of Account
export const fetchUpdateAccountSuccess = (data, status) => {
   return {
      type: accountConstants.FETCH_UPDATE_ACCOUNT_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data,
         status,
      },
   };
};

export const fetchUpdateAccountError = (error) => {
   return {
      type: accountConstants.FETCH_UPDATE_ACCOUNT_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchUpdateAccountRequest = (account) => {
   return (dispatch) => {
      accountApis
         .patchUpdateAccount(account)
         .then((resp) => {
            const { data, status } = resp;
            dispatch(fetchUpdateAccountSuccess(data, status));
         })
         .catch((error) => {
            dispatch(fetchUpdateAccountError(error));
         });
   };
};
