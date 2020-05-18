import * as postApis from "../_apis/post.api";
import * as postConstants from "../_constants/post.module";

//GET All Post
export const fetchListPost = () => {
   return {
      type: postConstants.FETCH_POST,
   };
};

export const fetchListPostSuccess = (data) => {
   return {
      type: postConstants.FETCH_POST_SUCCESS,
      payload: {
         data,
      },
   };
};

export const fetchListPostError = (error) => {
   return {
      type: postConstants.FETCH_POST_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchListPostRequest = () => {
   return (dispatch) => {
      postApis
         .getListPost()
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchListPostSuccess(data));
         })
         .catch((error) => {
            dispatch(fetchListPostError(error));
         });
   };
};

//GET All Post Image
export const fetchListPostImage = () => {
   return {
      type: postConstants.FETCH_POST_IMAGE,
   };
};

export const fetchListPostImageSuccess = (data) => {
   return {
      type: postConstants.FETCH_POST_IMAGE_SUCCESS,
      payload: {
         data,
      },
   };
};

export const fetchListPostImageError = (error) => {
   return {
      type: postConstants.FETCH_POST_IMAGE_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchListPostImageRequest = () => {
   return (dispatch) => {
      postApis
         .getListPostImage()
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchListPostImageSuccess(data));
         })
         .catch((error) => {
            dispatch(fetchListPostImageError(error));
         });
   };
};

// Get list posts search

export const fetchListPostSearchSuccess = (data) => {
   return {
      type: postConstants.FETCH_POST_SEARCH_SUCCESS,
      payload: {
         data,
      },
   };
};

export const fetchListPostSearchError = (error) => {
   return {
      type: postConstants.FETCH_POST_SEARCH_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchListPostSearchRequest = (data) => {
   return (dispatch) => {
      postApis
         .getListPostSearch(data)
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchListPostSearchSuccess(data));
         })
         .catch((error) => {
            dispatch(fetchListPostSearchError(error));
         });
   };
};

//GET Post By Id
export const fetchPostByIdSuccess = (data) => {
   return {
      type: postConstants.FETCH_POST_GET_BYID_SUCCESS,
      payload: {
         data,
      },
   };
};

export const fetchPostByIdError = (error) => {
   return {
      type: postConstants.FETCH_POST_GET_BYID_FAILED,
      payload: {
         error,
      },
   };
};

export const fetchPostByIdRequest = (idPost) => {
   return (dispatch) => {
      postApis
         .getPostById(idPost)
         .then((resp) => {
            const { data } = resp;
            dispatch(fetchPostByIdSuccess(data));
         })
         .catch((error) => {
            dispatch(fetchPostByIdError(error));
         });
   };
};

//Post vote post
export const votePostdSuccess = (data) => {
   return {
      type: postConstants.VOTE_POST_SUCCESS,
      payload: {
         data,
      },
   };
};

export const votePostdError = (error) => {
   return {
      type: postConstants.VOTE_POST_FAILED,
      payload: {
         error,
      },
   };
};

export const votePostdRequest = (data) => {
   return (dispatch) => {
      postApis
         .votePostById(data)
         .then((resp) => {
            const { data } = resp;
            dispatch(votePostdSuccess(data));
         })
         .catch((error) => {
            dispatch(votePostdError(error));
         });
   };
};
