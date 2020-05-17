import * as configApis from "../_apis/config.api";
import * as configConstants from "../_constants/config.module";

export const fetchListConfig = () => {
   return {
      type: configConstants.FETCH_CONFIG,
   };
};

//List Config
export const fetchListConfigSuccess = (data) => {
   return {
      type: configConstants.FETCH_CONFIG_SUCCESS,
      payload: {
         data,
      },
   };
};

export const fetchListConfigError = (error) => {
   return {
      type: configConstants.FETCH_CONFIG_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchListConfigRequest = () => {
   return (dispatch) => {
      dispatch(fetchListConfig()); //reset state configs-->[]
      configApis
         .getListConfig()
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchListConfigSuccess(data));
         })
         .catch((error) => {
            dispatch(fetchListConfigError(error));
         });
   };
};

//GET CONFIG BY ID
export const fetchConfigByIdSuccess = (data) => {
   return {
      type: configConstants.FETCH_CONFIG_GET_BYID_SUCCESS,
      payload: {
         data,
      },
   };
};

export const fetchConfigByIdError = (error) => {
   return {
      type: configConstants.FETCH_CONFIG_GET_BYID_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchConfigByIdRequest = (idConfig) => {
   return (dispatch) => {
      configApis
         .getConfigById(idConfig)
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchConfigByIdSuccess(data));
         })
         .catch((error) => {
            dispatch(fetchConfigByIdError(error));
         });
   };
};
//end Get Config By ID

//GET CONFIG BY INFOTYPE
export const fetchConfigByInfoTypeSuccess = (data) => {
   return {
      type: configConstants.FETCH_CONFIG_GET_BY_INFOTYPE_SUCCESS,
      payload: {
         data,
      },
   };
};

export const fetchConfigByInfoTypeError = (error) => {
   return {
      type: configConstants.FETCH_CONFIG_GET_BY_INFOTYPE_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchConfigByInfoTypeRequest = (infoType) => {
   return (dispatch) => {
      configApis
         .getConfigByInfoType(infoType)
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchConfigByInfoTypeSuccess(data));
         })
         .catch((error) => {
            dispatch(fetchConfigByInfoTypeError(error));
         });
   };
};
//end Get Config By ID

//POST Config - create
export const fetchPostConfigSuccess = (newRecord, data) => {
   return {
      type: configConstants.FETCH_CONFIG_CREATE_SUCCESS,
      payload: {
         data,
      },
      newRecord: { newRecord },
   };
};

export const fetchPostConfigError = (error) => {
   return {
      type: configConstants.FETCH_CONFIG_CREATE_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchPostConfigRequest = (newRecord) => {
   return (dispatch) => {
      configApis
         .postConfig(newRecord)
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchPostConfigSuccess(newRecord, data));
         })
         .catch((error) => {
            dispatch(fetchPostConfigError(error));
         });
   };
};
//end Create Config

//Delete Config
export const fetchDeleteConfigSuccess = (record, data) => {
   return {
      type: configConstants.FETCH_CONFIG_DELETE_SUCCESS,
      payload: {
         data,
      },
      record: { record },
   };
};

export const fetchDeleteConfigError = (error) => {
   return {
      type: configConstants.FETCH_CONFIG_DELETE_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchDeleteConfigRequest = (record) => {
   return (dispatch) => {
      configApis
         .deleteConfig(record.idConfig)
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchDeleteConfigSuccess(record, data));
         })
         .catch((error) => {
            dispatch(fetchDeleteConfigError(error));
         });
   };
};

//PATCH Config
export const fetchPatchConfigSuccess = (newRecord, data) => {
   return {
      type: configConstants.FETCH_CONFIG_PATCH_SUCCESS,
      payload: {
         data,
      },
      newRecord,
   };
};

export const fetchPatchConfigError = (error) => {
   return {
      type: configConstants.FETCH_CONFIG_PATCH_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchPatchConfigRequest = (newRecord) => {
   return (dispatch) => {
      configApis
         .patchConfig(newRecord)
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchPatchConfigSuccess(newRecord, data));
         })
         .catch((error) => {
            dispatch(fetchPatchConfigError(error));
         });
   };
};

//Image Config
export const fetchListConfigImage = () => {
   return {
      type: configConstants.FETCH_CONFIG_IMAGE,
   };
};

//List Config image
export const fetchListConfigImageSuccess = (data) => {
   return {
      type: configConstants.FETCH_CONFIG_IMAGE_SUCCESS,
      payload: {
         data,
      },
   };
};

export const fetchListConfigImageError = (error) => {
   return {
      type: configConstants.FETCH_CONFIG_IMAGE_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchListConfigImageRequest = () => {
   return (dispatch) => {
      dispatch(fetchListConfigImage()); //reset state Images-->[]
      configApis
         .getListImageConfig()
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchListConfigImageSuccess(data));
         })
         .catch((error) => {
            dispatch(fetchListConfigImageError(error));
         });
   };
};
