import * as generalApis from "../_apis/general.api";
import * as generalConstants from "../_constants/general.module";

export const fetchListGeneral = () => {
   return {
      type: generalConstants.FETCH_GENERAL
   };
};

//List General
export const fetchListGeneralSuccess = data => {
   return {
      type: generalConstants.FETCH_GENERAL_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      }
   };
};

export const fetchListGeneralError = error => {
   return {
      type: generalConstants.FETCH_GENERAL_FAILED,
      payload: {
         error
      }
   };
};
/**
 * B1: fetch isGeneralRequest()
 * B2: ResetL state generals --> []
 * B3: Khi API thành công thì vào then:
 * fetchListGeneralSucces (data response)
 *
 */
export const fetchListGeneralRequest = () => {
   return dispatch => {
      dispatch(fetchListGeneral()); //reset state generals-->[]
      generalApis
         .getListGeneral()
         .then(resp => {
            const { data } = resp;
            dispatch(fetchListGeneralSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListGeneralError(error));
         });
   };
};

//GET GENERAL BY ID
export const fetchGeneralByIdSuccess = data => {
   return {
      type: generalConstants.FETCH_GENERAL_GET_BYID_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchGeneralByIdError = error => {
   return {
      type: generalConstants.FETCH_GENERAL_GET_BYID_FAILED,
      payload: {
         error
      }
   };
};

export const fetchGeneralByIdRequest = idGeneral => {
   return dispatch => {
      generalApis
         .getGeneralById(idGeneral)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchGeneralByIdSuccess(data));
         })
         .catch(error => {
            dispatch(fetchGeneralByIdError(error));
         });
   };
};
//end Get General By ID

//POST General - create
export const fetchPostGeneralSuccess = (newRecord, data) => {
   return {
      type: generalConstants.FETCH_GENERAL_CREATE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPostGeneralError = error => {
   return {
      type: generalConstants.FETCH_GENERAL_CREATE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPostGeneralRequest = newRecord => {
   return dispatch => {
      generalApis
         .postGeneral(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPostGeneralSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPostGeneralError(error));
         });
   };
};
//end Create General

//Delete General
export const fetchDeleteGeneralSuccess = (record, data) => {
   return {
      type: generalConstants.FETCH_GENERAL_DELETE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      record: { record }
   };
};

export const fetchDeleteGeneralError = error => {
   return {
      type: generalConstants.FETCH_GENERAL_DELETE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchDeleteGeneralRequest = record => {
   return dispatch => {
      generalApis
         .deleteGeneral(record.idGeneral)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchDeleteGeneralSuccess(record, data));
         })
         .catch(error => {
            dispatch(fetchDeleteGeneralError(error));
         });
   };
};

//PATCH General
export const fetchPatchGeneralSuccess = (newRecord, data) => {
   return {
      type: generalConstants.FETCH_GENERAL_PATCH_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPatchGeneralError = error => {
   return {
      type: generalConstants.FETCH_GENERAL_PATCH_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPatchGeneralRequest = newRecord => {
   return dispatch => {
      generalApis
         .patchGeneral(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPatchGeneralSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPatchGeneralError(error));
         });
   };
};

//Image General
export const fetchListGeneralImage = () => {
   return {
      type: generalConstants.FETCH_GENERAL_IMAGE
   };
};

//List General image
export const fetchListGeneralImageSuccess = data => {
   return {
      type: generalConstants.FETCH_GENERAL_IMAGE_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchListGeneralImageError = error => {
   return {
      type: generalConstants.FETCH_GENERAL_IMAGE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchListGeneralImageRequest = () => {
   return dispatch => {
      dispatch(fetchListGeneralImage()); //reset state Images-->[]
      generalApis
         .getListImageGeneral()
         .then(resp => {
            const { data } = resp;
            dispatch(fetchListGeneralImageSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListGeneralImageError(error));
         });
   };
};
