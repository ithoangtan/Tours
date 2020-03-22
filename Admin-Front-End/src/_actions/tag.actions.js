import * as tagApis from "../_apis/tag.api";
import * as tagConstants from "../_constants/tag.module";

export const fetchListTag = () => {
   return {
      type: tagConstants.FETCH_TAG
   };
};

//List Tag
export const fetchListTagSuccess = data => {
   return {
      type: tagConstants.FETCH_TAG_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchListTagError = error => {
   return {
      type: tagConstants.FETCH_TAG_FAILED,
      payload: {
         error
      }
   };
};
/**
 * B1: fetch isTagRequest()
 * B2: ResetL state tags --> []
 * B3: Khi API thành công thì vào then:
 * fetchListTagSucces (data response)
 *
 */
export const fetchListTagRequest = () => {
   return dispatch => {
      dispatch(fetchListTag()); //reset state tags-->[]
      tagApis
         .getListTag()
         .then(resp => {
            const { data } = resp;
            dispatch(fetchListTagSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListTagError(error));
         });
   };
};

//GET TAG BY ID
export const fetchTagByIdSuccess = data => {
   return {
      type: tagConstants.FETCH_TAG_GET_BYID_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchTagByIdError = error => {
   return {
      type: tagConstants.FETCH_TAG_GET_BYID_FAILED,
      payload: {
         error
      }
   };
};

export const fetchTagByIdRequest = idTag => {
   return dispatch => {
      tagApis
         .getTagById(idTag)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchTagByIdSuccess(data));
         })
         .catch(error => {
            dispatch(fetchTagByIdError(error));
         });
   };
};
//end Get Tag By ID

//POST Tag - create
export const fetchPostTagSuccess = (newRecord, data) => {
   return {
      type: tagConstants.FETCH_TAG_CREATE_SUCCESS,
      payload: {
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPostTagError = error => {
   return {
      type: tagConstants.FETCH_TAG_CREATE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPostTagRequest = newRecord => {
   return dispatch => {
      tagApis
         .postTag(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPostTagSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPostTagError(error));
         });
   };
};
//end Create Tag

//Delete Tag
export const fetchDeleteTagSuccess = (record, data) => {
   return {
      type: tagConstants.FETCH_TAG_DELETE_SUCCESS,
      payload: {
         data
      },
      record: { record }
   };
};

export const fetchDeleteTagError = error => {
   return {
      type: tagConstants.FETCH_TAG_DELETE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchDeleteTagRequest = record => {
   return dispatch => {
      tagApis
         .deleteTag(record.idTag)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchDeleteTagSuccess(record, data));
         })
         .catch(error => {
            dispatch(fetchDeleteTagError(error));
         });
   };
};

//PATCH Tag
export const fetchPatchTagSuccess = (newRecord, data) => {
   return {
      type: tagConstants.FETCH_TAG_PATCH_SUCCESS,
      payload: {
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPatchTagError = error => {
   return {
      type: tagConstants.FETCH_TAG_PATCH_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPatchTagRequest = newRecord => {
   return dispatch => {
      tagApis
         .patchTag(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPatchTagSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPatchTagError(error));
         });
   };
};
