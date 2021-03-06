import * as orderConstants from "../_constants/order.module";
import { ORDER_STATUS } from "../_constants/index.constants";
import {
   messageError,
   messageSuccess,
   // messageLoading,
   messageWarning,
} from "../_helper/message.helper";
const orders = localStorage.getItem("orders");
const email = sessionStorage.getItem("email");
const initialState = {
   listOrder: [],
   orderByIdAccount: {},
   delete: [],
   patch: [],
   create: [],
   data: [],
   dataMomo: [],
   emailOrder: email ? email : orders ? JSON.parse(orders).email : null,
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case orderConstants.FETCH_ORDER:
         return {
            ...state,
            listOrder: [],
         };
      case orderConstants.FETCH_ORDER_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            listOrder: data,
         };
      }
      case orderConstants.FETCH_ORDER_FAILED: {
         const { error } = action.payload;
         messageError(`${error}`, 1);
         return {
            ...state,
            listOrder: error,
         };
      }
      // Get order by email
      case orderConstants.FETCH_ORDER_BY_EMAIL_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            listOrder: data,
         };
      }
      case orderConstants.FETCH_ORDER_BY_EMAIL_FAILED: {
         const { error } = action.payload;
         messageError(`${error}`, 1);
         return {
            ...state,
            listOrder: error,
         };
      }
      //Order Get By Id Account
      case orderConstants.FETCH_ORDER_GET_BYID_ACCOUNT_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            orderByIdAccount: data,
         };
      }
      case orderConstants.FETCH_ORDER_GET_BYID_ACCOUNT_FAILED: {
         const { error } = action.payload;
         messageError(`${error}`, 1);
         return {
            ...state,
            orderByIdAccount: error,
         };
      }

      //Post - Create
      case orderConstants.FETCH_ORDER_CREATE_SUCCESS: {
         const { data } = action.payload;
         const { order } = action.order;
         messageSuccess(`Đơn hàng ${order.PIN} tạo thành công!`, 3);
         return {
            ...state,
            create: data,
         };
      }
      case orderConstants.FETCH_ORDER_CREATE_FAILED: {
         const { error } = action.payload;
         messageError(`${error}`, 1);
         return {
            ...state,
            create: error,
         };
      }

      //Delete
      case orderConstants.FETCH_ORDER_DELETE_SUCCESS: {
         const { data } = action.payload;
         const { record } = action.record;
         messageWarning(`Đơn hàng ${record.PIN} xóa thành công!`, 3);
         return {
            ...state,
            delete: data,
         };
      }
      case orderConstants.FETCH_ORDER_DELETE_FAILED: {
         const { error } = action.payload;
         messageError(`${error}`, 1);
         return {
            ...state,
            delete: error,
         };
      }

      //Patch - update
      case orderConstants.FETCH_ORDER_PATCH_SUCCESS: {
         const { data } = action.payload;
         const { order } = action.order;
         if (
            data.updateOrder &&
            data.updateOrder.status === ORDER_STATUS.PAID
         ) {
            messageSuccess(`Đơn hàng ${order.PIN} mua thành công!`, 3);
         } else {
            messageError(`Đơn hàng ${order.PIN} mua thất bại!`, 3);
         }
         return {
            ...state,
            patch: data,
         };
      }
      case orderConstants.FETCH_ORDER_PATCH_FAILED: {
         const { error } = action.payload;
         messageError(`${error}`, 1);
         return {
            ...state,
            patch: error,
         };
      }

      //Get Link Payment
      case orderConstants.FETCH_GET_LINK_PAYMENT_SUCCESS: {
         const { data } = action.payload;
         messageSuccess(`${data.message}!`, 3);
         return {
            ...state,
            data: data,
         };
      }
      case orderConstants.FETCH_GET_LINK_PAYMENT_FAILED: {
         const { error } = action.payload;
         messageError(`${error}`, 1);
         return {
            ...state,
            data: error,
         };
      }
      //Get Link Payment Momo
      case orderConstants.FETCH_GET_LINK_PAYMENT_MOMO_SUCCESS: {
         const { data } = action.payload;
         messageSuccess(`${data.message}!`, 3);
         return {
            ...state,
            dataMomo: data,
         };
      }
      case orderConstants.FETCH_GET_LINK_PAYMENT_MOMO_FAILED: {
         const { error } = action.payload;
         messageError(`${error}`, 1);
         return {
            ...state,
            dataMomo: error,
         };
      }
      default:
         return state;
   }
};

export default reducer;
