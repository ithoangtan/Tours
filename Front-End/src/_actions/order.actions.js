import * as orderApis from "../_apis/order.api";
import * as orderConstants from "../_constants/order.module";

export const fetchListOrder = () => {
   return {
      type: orderConstants.FETCH_ORDER
   };
};

//List Tour
export const fetchListOrderSuccess = data => {
   return {
      type: orderConstants.FETCH_ORDER_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      }
   };
};

export const fetchListOrderError = error => {
   return {
      type: orderConstants.FETCH_ORDER_FAILED,
      payload: {
         error
      }
   };
};

export const fetchListOrderRequest = () => {
   return dispatch => {
      dispatch(fetchListOrder()); //reset state tours-->[]
      orderApis
         .getListOrder()
         .then(resp => {
            const { data } = resp;
            dispatch(fetchListOrderSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListOrderError(error));
         });
   };
};

//Get Order By  ID Tour
export const fetchOrderByIdTourSuccess = data => {
   return {
      type: orderConstants.FETCH_ORDER_GET_BYID_ACCOUNT_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchOrderByIdTourError = error => {
   return {
      type: orderConstants.FETCH_ORDER_GET_BYID_ACCOUNT_FAILED,
      payload: {
         error
      }
   };
};

export const fetchOrderByIdTourRequest = idTour => {
   return dispatch => {
      orderApis
         .getOrderByIdTour(idTour)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchOrderByIdTourSuccess(data));
         })
         .catch(error => {
            dispatch(fetchOrderByIdTourError(error));
         });
   };
};

//Get Order By  ID ORDER
export const fetchOrderByIdSuccess = data => {
   return {
      type: orderConstants.FETCH_ORDER_GET_BYID_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchOrderByIdError = error => {
   return {
      type: orderConstants.FETCH_ORDER_GET_BYID_FAILED,
      payload: {
         error
      }
   };
};

export const fetchOrderByIdRequest = idOrder => {
   return dispatch => {
      orderApis
         .getOrderById(idOrder)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchOrderByIdSuccess(data));
         })
         .catch(error => {
            dispatch(fetchOrderByIdError(error));
         });
   };
};

//POST Order - create
export const fetchPostOrderSuccess = (order, data) => {
   return {
      type: orderConstants.FETCH_ORDER_CREATE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      order: { order }
   };
};

export const fetchPostOrderError = error => {
   return {
      type: orderConstants.FETCH_ORDER_CREATE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPostOrderRequest = order => {
   return dispatch => {
      orderApis
         .postOrder(order)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPostOrderSuccess(order, data));
         })
         .catch(error => {
            dispatch(fetchPostOrderError(error));
         });
   };
};
//end Create Order

//Delete Order
export const fetchDeleteOrderSuccess = (record, data) => {
   return {
      type: orderConstants.FETCH_ORDER_DELETE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      record: { record }
   };
};

export const fetchDeleteOrderError = error => {
   return {
      type: orderConstants.FETCH_ORDER_DELETE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchDeleteOrderRequest = record => {
   return dispatch => {
      orderApis
         .deleteOrder(record.idOrder)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchDeleteOrderSuccess(record, data));
         })
         .catch(error => {
            dispatch(fetchDeleteOrderError(error));
         });
   };
};

//PATCH Order
export const fetchPatchOrderSuccess = (order, data) => {
   return {
      type: orderConstants.FETCH_ORDER_PATCH_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      order: { order }
   };
};

export const fetchPatchOrderError = error => {
   return {
      type: orderConstants.FETCH_ORDER_PATCH_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPatchOrderRequest = order => {
   return dispatch => {
      orderApis
         .patchOrder(order)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPatchOrderSuccess(order, data));
         })
         .catch(error => {
            dispatch(fetchPatchOrderError(error));
         });
   };
};

//Get Link Payment
export const fetchGetLinkPaymentSuccess = (infoPayment, data) => {
   return {
      type: orderConstants.FETCH_GET_LINK_PAYMENT_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      infoPayment: { infoPayment }
   };
};

export const fetchGetLinkPaymentError = error => {
   return {
      type: orderConstants.FETCH_GET_LINK_PAYMENT_FAILED,
      payload: {
         error
      }
   };
};

export const fetchGetLinkPaymentRequest = infoPayment => {
   return dispatch => {
      orderApis
         .getLinkPayment(infoPayment)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchGetLinkPaymentSuccess(infoPayment, data));
         })
         .catch(error => {
            dispatch(fetchGetLinkPaymentError(error));
         });
   };
};
