import * as serviceApis from "../_apis/service.api";
import * as serviceConstants from "../_constants/service.module";

export const fetchListServices = () => {
   return {
      type: serviceConstants.FETCH_SERVICE
   };
};

//List Services
export const fetchListServicesSuccess = data => {
   return {
      type: serviceConstants.FETCH_SERVICE_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchListServicesError = error => {
   return {
      type: serviceConstants.FETCH_SERVICE_FAILED,
      payload: {
         error
      }
   };
};
/**
 * B1: fetch isServicesRequest()
 * B2: ResetL state services --> []
 * B3: Khi API thành công thì vào then:
 * fetchListServicesSucces (data response)
 *
 */
export const fetchListServicesRequest = () => {
   return dispatch => {
      dispatch(fetchListServices()); //reset state services-->[]
      serviceApis
         .getListServices()
         .then(resp => {
            const { data } = resp;
            dispatch(fetchListServicesSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListServicesError(error));
         });
   };
};

//GET SERVICE BY ID
export const fetchServicesByIdSuccess = data => {
   return {
      type: serviceConstants.FETCH_SERVICE_GET_BYID_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchServicesByIdError = error => {
   return {
      type: serviceConstants.FETCH_SERVICE_GET_BYID_FAILED,
      payload: {
         error
      }
   };
};

export const fetchServicesByIdRequest = idServices => {
   return dispatch => {
      serviceApis
         .getServicesById(idServices)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchServicesByIdSuccess(data));
         })
         .catch(error => {
            dispatch(fetchServicesByIdError(error));
         });
   };
};
//end Get Services By ID

//POST Services - create
export const fetchPostServicesSuccess = (newRecord, data) => {
   return {
      type: serviceConstants.FETCH_SERVICE_CREATE_SUCCESS,
      payload: {
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPostServicesError = error => {
   return {
      type: serviceConstants.FETCH_SERVICE_CREATE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPostServicesRequest = newRecord => {
   return dispatch => {
      serviceApis
         .postServices(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPostServicesSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPostServicesError(error));
         });
   };
};
//end Create Services

//Delete Services
export const fetchDeleteServicesSuccess = (record, data) => {
   return {
      type: serviceConstants.FETCH_SERVICE_DELETE_SUCCESS,
      payload: {
         data
      },
      record: { record }
   };
};

export const fetchDeleteServicesError = error => {
   return {
      type: serviceConstants.FETCH_SERVICE_DELETE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchDeleteServicesRequest = record => {
   return dispatch => {
      serviceApis
         .deleteServices(record.idServices)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchDeleteServicesSuccess(record, data));
         })
         .catch(error => {
            dispatch(fetchDeleteServicesError(error));
         });
   };
};

//PATCH Services
export const fetchPatchServicesSuccess = (newRecord, data) => {
   return {
      type: serviceConstants.FETCH_SERVICE_PATCH_SUCCESS,
      payload: {
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPatchServicesError = error => {
   return {
      type: serviceConstants.FETCH_SERVICE_PATCH_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPatchServicesRequest = newRecord => {
   return dispatch => {
      serviceApis
         .patchServices(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPatchServicesSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPatchServicesError(error));
         });
   };
};
