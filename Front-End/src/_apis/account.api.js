import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";

const pathAccount = "accountWithEmail";

export const getProfileWithEmail = email => {
   return axiosService.get(`${API_ENDPOINT}/${pathAccount}?email=${email}`);
};

export const getOrderOfAccountWithEmail = email => {
   return axiosService.get(`${API_ENDPOINT}/${pathAccount}?email=${email}`);
};

export const getFavoritesWithEmail = email => {
   return axiosService.get(`${API_ENDPOINT}/${pathAccount}?email=${email}`);
};
