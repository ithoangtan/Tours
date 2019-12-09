import * as orderConstants from "../_constants/order.module";
import {
   toastError,
   toastPatchOrderSuccess,
   toastDeleteOrderSuccess,
   toastCreateOrderSuccess
} from "../_helper/toastify.helper";
const initialState = {
   listOrder: [],
   orderByIdAccount: {},
   delete: [],
   patch: [],
   create: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case orderConstants.FETCH_SCHEDULE:
         return {
            ...state,
            listOrder: []
         };
      case orderConstants.FETCH_SCHEDULE_SUCCESS: {
         const { data } = action.payload;
         // toastOrderSuccess(data);
         return {
            ...state,
            listOrder: data
         };
      }
      case orderConstants.FETCH_SCHEDULE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listOrder: error
         };
      }

      //Order Get By Id Tour
      case orderConstants.FETCH_SCHEDULE_GET_BYID_ORDER_SUCCESS: {
         const { data } = action.payload;
         // toastOrderGetByIdAccountSuccess(data);
         return {
            ...state,
            orderByIdAccount: data
         };
      }
      case orderConstants.FETCH_SCHEDULE_GET_BYID_ORDER_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            orderByIdAccount: error
         };
      }

      //Post - Create
      case orderConstants.FETCH_SCHEDULE_CREATE_SUCCESS: {
         const { data } = action.payload;
         const { newOrder } = action.newOrder;
         toastCreateOrderSuccess(newOrder);
         return {
            ...state,
            create: data
         };
      }
      case orderConstants.FETCH_SCHEDULE_CREATE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            create: error
         };
      }

      //Delete
      case orderConstants.FETCH_SCHEDULE_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { record } = action.record;
         toastDeleteOrderSuccess(record);
         return {
            ...state,
            delete: data
         };
      }
      case orderConstants.FETCH_SCHEDULE_DELETE_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            delete: error
         };
      }

      //Patch - update
      case orderConstants.FETCH_SCHEDULE_PATCH_SUCCESS: {
         const { data } = action.payload;
         const { order } = action.order;
         toastPatchOrderSuccess(order);
         return {
            ...state,
            patch: data
         };
      }
      case orderConstants.FETCH_SCHEDULE_PATCH_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            patch: error
         };
      }

      default:
         return state;
   }
};

export default reducer;
