import axios from "axios";

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
      return this.instance.get(url);
   }

   post(url, data) {
      return this.instance.post(url, data);
   }

   put(url) {
      return this.instance.put(url);
   }
   delete(url) {
      return this.instance.delete(url);
   }
   patch(url, data) {
      return this.instance.patch(url, data);
   }
   update(url, data) {
      return this.instance.update(url, data);
   }
}

export default new AxiosService();
