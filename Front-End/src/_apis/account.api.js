import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";

const pathAccountWithEmail = "accountWithEmail";
const pathOrder = "orderWithEmail";
const pathFavorite = "favoritesWithEmail";
const pathAccount = "account";

export const getProfileWithEmail = email => {
   return axiosService.get(
      `${API_ENDPOINT}/${pathAccountWithEmail}?email=${email}`
   );
};

export const getOrderOfAccountWithEmail = email => {
   return axiosService.get(`${API_ENDPOINT}/${pathOrder}?email=${email}`);
};

export const getFavoritesWithEmail = email => {
   return axiosService.get(`${API_ENDPOINT}/${pathFavorite}?email=${email}`);
};

export const patchUpdateAccount = account => {
   return axiosService.patch(`${API_ENDPOINT}/${pathAccount}`, account);
};
