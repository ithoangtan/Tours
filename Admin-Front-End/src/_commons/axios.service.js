import axios from "axios";

import Cookies from "js-cookie";
/**
 * Viết class để dễ dàng mở rộng hơn
 * Sẽ có lợi khi xác thực
 */
class AxiosService {
   constructor() {
      const instance = axios.create();
      instance.interceptors.response.use(this.handleSuccess, this.handleError);

      this.instance = instance;
   }

   handleSuccess(response) {
      return response;
   }

   handleError(error) {
      return Promise.reject(error);
   }

   get(url) {
      return this.instance.get(url, {
         headers: { Authentication: getCookie("token") }
      });
   }

   post(url, data) {
      return this.instance.post(url, data, {
         headers: { Authentication: getCookie("token") }
      });
   }
   patch(url, data) {
      return this.instance.patch(url, data, {
         headers: { Authentication: getCookie("token") }
      });
   }
   put(url) {
      return this.instance.put(url, {
         headers: { Authentication: getCookie("token") }
      });
   }
   delete(url) {
      return this.instance.delete(url, {
         headers: { Authentication: getCookie("token") }
      });
   }
}

function getCookie(name) {
   const token = Cookies.get(name);
   return token;
}

export default new AxiosService();
