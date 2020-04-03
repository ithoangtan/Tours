import * as postApis from "../_apis/post.api";
import * as postConstants from "../_constants/post.module";

export const fetchListPost = () => {
   return {
      type: postConstants.FETCH_POST
   };
};

//List Post
export const fetchListPostSuccess = data => {
   return {
      type: postConstants.FETCH_POST_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      }
   };
};

export const fetchListPostError = error => {
   return {
      type: postConstants.FETCH_POST_FAILED,
      payload: {
         error
      }
   };
};
/**
 * B1: fetch isPostRequest()
 * B2: ResetL state posts --> []
 * B3: Khi API thành công thì vào then:
 * fetchListPostSucces (data response)
 *
 */
export const fetchListPostRequest = () => {
   return dispatch => {
      dispatch(fetchListPost()); //reset state posts-->[]
      postApis
         .getListPost()
         .then(resp => {
            const { data } = resp;
            console.log(data);

            dispatch(fetchListPostSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListPostError(error));
         });
   };
};

//GET POST BY ID
export const fetchPostByIdSuccess = data => {
   return {
      type: postConstants.FETCH_POST_GET_BYID_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchPostByIdError = error => {
   return {
      type: postConstants.FETCH_POST_GET_BYID_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPostByIdRequest = idPost => {
   return dispatch => {
      postApis
         .getPostById(idPost)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPostByIdSuccess(data));
         })
         .catch(error => {
            dispatch(fetchPostByIdError(error));
         });
   };
};
//end Get Post By ID

//POST Post - create
export const fetchPostPostSuccess = (newRecord, data) => {
   return {
      type: postConstants.FETCH_POST_CREATE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      newRecord: newRecord
   };
};

export const fetchPostPostError = error => {
   return {
      type: postConstants.FETCH_POST_CREATE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPostPostRequest = newRecord => {
   return dispatch => {
      postApis
         .postPost(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPostPostSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPostPostError(error));
         });
   };
};
//end Create Post

//Delete Post
export const fetchDeletePostSuccess = (record, data) => {
   return {
      type: postConstants.FETCH_POST_DELETE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      record: record
   };
};

export const fetchDeletePostError = error => {
   return {
      type: postConstants.FETCH_POST_DELETE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchDeletePostRequest = record => {
   return dispatch => {
      postApis
         .deletePost(record.idPost)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchDeletePostSuccess(record, data));
         })
         .catch(error => {
            dispatch(fetchDeletePostError(error));
         });
   };
};

//PATCH Post
export const fetchPatchPostSuccess = (newRecord, data) => {
   return {
      type: postConstants.FETCH_POST_PATCH_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPatchPostError = error => {
   return {
      type: postConstants.FETCH_POST_PATCH_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPatchPostRequest = newRecord => {
   return dispatch => {
      postApis
         .patchPost(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPatchPostSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPatchPostError(error));
         });
   };
};

//Image Post
export const fetchListPostImage = () => {
   return {
      type: postConstants.FETCH_POST_IMAGE
   };
};

//List Post image
export const fetchListPostImageSuccess = data => {
   return {
      type: postConstants.FETCH_POST_IMAGE_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchListPostImageError = error => {
   return {
      type: postConstants.FETCH_POST_IMAGE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchListPostImageRequest = () => {
   return dispatch => {
      dispatch(fetchListPostImage()); //reset state Images-->[]
      postApis
         .getListImagePost()
         .then(resp => {
            const { data } = resp;
            dispatch(fetchListPostImageSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListPostImageError(error));
         });
   };
};
