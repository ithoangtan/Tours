import * as accountApis from "../_apis/account.api";
import * as accountConstants from "../_constants/account.module";

export const fetchListAccount = () => {
   return {
      type: accountConstants.FETCH_ACCOUNT
   };
};

//List Account
export const fetchListAccountSuccess = data => {
   return {
      type: accountConstants.FETCH_ACCOUNT_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      }
   };
};

export const fetchListAccountError = error => {
   return {
      type: accountConstants.FETCH_ACCOUNT_FAILED,
      payload: {
         error
      }
   };
};
/**
 * B1: fetch isAccountRequest()
 * B2: ResetL state accounts --> []
 * B3: Khi API thành công thì vào then:
 * fetchListAccountSucces (data response)
 *
 */
export const fetchListAccountRequest = () => {
   return dispatch => {
      dispatch(fetchListAccount()); //reset state accounts-->[]
      accountApis
         .getListAccount()
         .then(resp => {
            const { data } = resp;
            console.log(data);

            dispatch(fetchListAccountSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListAccountError(error));
         });
   };
};

//GET ACCOUNT BY ID
export const fetchAccountByIdSuccess = data => {
   return {
      type: accountConstants.FETCH_ACCOUNT_GET_BYID_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchAccountByIdError = error => {
   return {
      type: accountConstants.FETCH_ACCOUNT_GET_BYID_FAILED,
      payload: {
         error
      }
   };
};

export const fetchAccountByIdRequest = idAccount => {
   return dispatch => {
      accountApis
         .getAccountById(idAccount)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchAccountByIdSuccess(data));
         })
         .catch(error => {
            dispatch(fetchAccountByIdError(error));
         });
   };
};
//end Get Account By ID

//POST Account - create
export const fetchPostAccountSuccess = (newRecord, data) => {
   return {
      type: accountConstants.FETCH_ACCOUNT_CREATE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPostAccountError = error => {
   return {
      type: accountConstants.FETCH_ACCOUNT_CREATE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPostAccountRequest = newRecord => {
   return dispatch => {
      accountApis
         .postAccount(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPostAccountSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPostAccountError(error));
         });
   };
};
//end Create Account

//Delete Account
export const fetchDeleteAccountSuccess = (record, data) => {
   return {
      type: accountConstants.FETCH_ACCOUNT_DELETE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      record: { record }
   };
};

export const fetchDeleteAccountError = error => {
   return {
      type: accountConstants.FETCH_ACCOUNT_DELETE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchDeleteAccountRequest = record => {
   return dispatch => {
      accountApis
         .deleteAccount(record.idAccount)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchDeleteAccountSuccess(record, data));
         })
         .catch(error => {
            dispatch(fetchDeleteAccountError(error));
         });
   };
};

//PATCH Account
export const fetchPatchAccountSuccess = (newRecord, data) => {
   return {
      type: accountConstants.FETCH_ACCOUNT_PATCH_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPatchAccountError = error => {
   return {
      type: accountConstants.FETCH_ACCOUNT_PATCH_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPatchAccountRequest = newRecord => {
   return dispatch => {
      accountApis
         .patchAccount(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPatchAccountSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPatchAccountError(error));
         });
   };
};

//Image Account
export const fetchListAccountImage = () => {
   return {
      type: accountConstants.FETCH_ACCOUNT_IMAGE
   };
};

//List Account image
export const fetchListAccountImageSuccess = data => {
   return {
      type: accountConstants.FETCH_ACCOUNT_IMAGE_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchListAccountImageError = error => {
   return {
      type: accountConstants.FETCH_ACCOUNT_IMAGE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchListAccountImageRequest = () => {
   return dispatch => {
      dispatch(fetchListAccountImage()); //reset state Images-->[]
      accountApis
         .getListImageAccount()
         .then(resp => {
            const { data } = resp;
            dispatch(fetchListAccountImageSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListAccountImageError(error));
         });
   };
};
