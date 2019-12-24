import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";

// const url = "auth";
const pathLogin = "login";
const pathRegister = "register";

export const login = data => {
   return axiosService.post(`${API_ENDPOINT}/${pathLogin}`, data);
};
export const register = data => {
   return axiosService.post(`${API_ENDPOINT}/${pathRegister}`, data);
};
