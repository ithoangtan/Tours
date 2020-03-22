import * as serviceApis from "../_apis/service.api";
import * as serviceConstants from "../_constants/service.module";

export const fetchListService = () => {
   return {
      type: serviceConstants.FETCH_SERVICE
   };
};

//List Service
export const fetchListServiceSuccess = data => {
   return {
      type: serviceConstants.FETCH_SERVICE_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchListServiceError = error => {
   return {
      type: serviceConstants.FETCH_SERVICE_FAILED,
      payload: {
         error
      }
   };
};
/**
 * B1: fetch isServiceRequest()
 * B2: ResetL state services --> []
 * B3: Khi API thành công thì vào then:
 * fetchListServiceSucces (data response)
 *
 */
export const fetchListServiceRequest = () => {
   return dispatch => {
      dispatch(fetchListService()); //reset state services-->[]
      serviceApis
         .getListService()
         .then(resp => {
            const { data } = resp;
            dispatch(fetchListServiceSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListServiceError(error));
         });
   };
};

//GET SERVICE BY ID
export const fetchServiceByIdSuccess = data => {
   return {
      type: serviceConstants.FETCH_SERVICE_GET_BYID_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchServiceByIdError = error => {
   return {
      type: serviceConstants.FETCH_SERVICE_GET_BYID_FAILED,
      payload: {
         error
      }
   };
};

export const fetchServiceByIdRequest = idService => {
   return dispatch => {
      serviceApis
         .getServiceById(idService)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchServiceByIdSuccess(data));
         })
         .catch(error => {
            dispatch(fetchServiceByIdError(error));
         });
   };
};
//end Get Service By ID

//POST Service - create
export const fetchPostServiceSuccess = (newRecord, data) => {
   return {
      type: serviceConstants.FETCH_SERVICE_CREATE_SUCCESS,
      payload: {
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPostServiceError = error => {
   return {
      type: serviceConstants.FETCH_SERVICE_CREATE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPostServiceRequest = newRecord => {
   return dispatch => {
      serviceApis
         .postService(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPostServiceSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPostServiceError(error));
         });
   };
};
//end Create Service

//Delete Service
export const fetchDeleteServiceSuccess = (record, data) => {
   return {
      type: serviceConstants.FETCH_SERVICE_DELETE_SUCCESS,
      payload: {
         data
      },
      record: { record }
   };
};

export const fetchDeleteServiceError = error => {
   return {
      type: serviceConstants.FETCH_SERVICE_DELETE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchDeleteServiceRequest = record => {
   return dispatch => {
      serviceApis
         .deleteService(record.idService)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchDeleteServiceSuccess(record, data));
         })
         .catch(error => {
            dispatch(fetchDeleteServiceError(error));
         });
   };
};

//PATCH Service
export const fetchPatchServiceSuccess = (newRecord, data) => {
   return {
      type: serviceConstants.FETCH_SERVICE_PATCH_SUCCESS,
      payload: {
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPatchServiceError = error => {
   return {
      type: serviceConstants.FETCH_SERVICE_PATCH_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPatchServiceRequest = newRecord => {
   return dispatch => {
      serviceApis
         .patchService(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPatchServiceSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPatchServiceError(error));
         });
   };
};
