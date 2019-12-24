import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";

const pathLogin = "login";
const pathRegister = "register";
const pathVerify = "verify";

export const login = data => {
   return axiosService.post(`${API_ENDPOINT}/${pathLogin}`, data);
};
export const register = data => {
   return axiosService.post(`${API_ENDPOINT}/${pathRegister}`, data);
};
export const verifyEmail = params => {
   console.log(`${API_ENDPOINT}/${pathVerify}${params}`);

   return axiosService.get(`${API_ENDPOINT}/${pathVerify}${params}`);
};
