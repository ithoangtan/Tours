import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";

const url = "order";
const urls = "orders";
const getLinkPaymentUrl = "getLinkPayment";

export const getListOrder = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const getOrderById = idOrder => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idOrder=${idOrder}`);
};

export const getOrderByIdTour = idTour => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idTour=${idTour}`);
};

export const postOrder = data => {
   return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const deleteOrder = idOrder => {
   return axiosService.delete(`${API_ENDPOINT}/${url}?idOrder=${idOrder}`);
};

export const patchOrder = data => {
   return axiosService.patch(`${API_ENDPOINT}/${url}`, data);
};
export const getLinkPayment = data => {
   return axiosService.post(`${API_ENDPOINT}/${getLinkPaymentUrl}`, data);
};
