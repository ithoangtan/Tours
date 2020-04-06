import * as postConstants from "../_constants/post.module";
import { toastError } from "../_helper/toastify.helper";
import { messageSuccess } from "../_helper/message.helper";
import { compareValues } from "../_helper/compareValue.helper";
const initialState = {
   listPost: [],
   listPostSearch: [],
   listPostNew: [],
   listPostViews: [],
   postById: {}
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      //Load List Post
      case postConstants.FETCH_POST_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            listPost: data,
            listPostNew: data
               .sort(compareValues("dateAdded", "desc"))
               .slice(0, 5),
            listPostViews: data.sort(compareValues("views", "desc")).slice(0, 5)
         };
      }
      case postConstants.FETCH_POST_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listPost: error
         };
      }
      //Load List Post Search
      case postConstants.FETCH_POST_SEARCH_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            listPostSearch: data[0]
         };
      }
      case postConstants.FETCH_POST_SEARCH_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listPostSearch: error
         };
      }
      //Load Post by Id
      case postConstants.FETCH_POST_GET_BYID_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            postById: data[0]
         };
      }
      case postConstants.FETCH_POST_GET_BYID_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            postById: error
         };
      }
      //Vote Post
      case postConstants.VOTE_POST_SUCCESS: {
         messageSuccess("Cảm ơn bạn đã vote bài viết", 3);
         return {
            ...state
         };
      }
      case postConstants.VOTE_POST_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state
         };
      }
      default:
         return state;
   }
};

export default reducer;
