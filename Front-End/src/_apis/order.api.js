import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";

const url = "order";
const urlPINSuccess = "resultPayment";
const urlPINFailed = "cancelPayment";
const urls = "orders";
const getLinkPaymentUrl = "getLinkPayment";
const getLinkPaymentMomoUrl = "getLinkMoMo";
const urlOrderWithEmail = "orderWithEmail";

export const getListOrder = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const getOrderById = (idOrder) => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idOrder=${idOrder}`);
};

export const getOrderByIdTour = (idTour) => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idTour=${idTour}`);
};

export const postOrder = (data) => {
   return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const deleteOrder = (idOrder) => {
   return axiosService.delete(`${API_ENDPOINT}/${url}?idOrder=${idOrder}`);
};

export const patchOrder = (data) => {
   return axiosService.patch(`${API_ENDPOINT}/${url}`, data);
};
///status, PIN
export const patchSetStatusPaid = (data) => {
   return axiosService.post(`${API_ENDPOINT}/${urlPINSuccess}`, data);
};

export const patchSetStatusFailed = (data) => {
   return axiosService.post(`${API_ENDPOINT}/${urlPINFailed}`, data);
};

export const getLinkPayment = (data) => {
   return axiosService.post(`${API_ENDPOINT}/${getLinkPaymentUrl}`, data);
};

export const getLinkPaymentMomo = (data) => {
   return axiosService.post(`${API_ENDPOINT}/${getLinkPaymentMomoUrl}`, data);
};

export const getOrderByEmail = (email) => {
   return axiosService.get(
      `${API_ENDPOINT}/${urlOrderWithEmail}?email=${email}`
   );
};
