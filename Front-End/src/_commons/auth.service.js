import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

import * as authContants from "../_constants/auth.module";

/**
 * Nhận param được mã hóa dưới back-end
 * và decoded trả về giá trị tương ứng với tên truyền vào
 * @param {*} nameParam
 */
export const getParamTokenWithName = nameParam => {
   const token = Cookies.get("token");
   let decodedToken = {};
   try {
      decodedToken = jwt.verify(token, authContants.ENCRYPTCODE);
   } catch (err) {
      throw err;
   }
   if (!decodedToken) {
      return null;
   }
   if (nameParam === "role") return decodedToken.role;
   if (nameParam === "idAccount") return decodedToken.idAccount;
   if (nameParam === "email") return decodedToken.email;
};

/**
 * Hàm này sign cookie với jwt và add cookie
 * Truyền vào giá trị của cookie
 * @param {*} nameCookie
 * @param {*} value
 */
export const setSignCookie = (nameCookie, value, config) => {
   //sign
   let cookieSign = "";
   try {
      cookieSign = jwt.sign({ [nameCookie]: value }, authContants.ENCRYPTCODE);
   } catch (err) {
      throw err;
   }

   //set cookies
   Cookies.set([nameCookie], cookieSign, config);
};

/**
 * Hàm encode
 * và trả về giá trị của tên cookie truyền vào
 * @param {*} nameCookie
 */
export const getSignCookie = nameCookie => {
   let decoded = "";
   // Get cookie
   const value = Cookies.get([nameCookie]);

   //encode
   try {
      decoded = jwt.verify(value, authContants.ENCRYPTCODE);
   } catch (err) {
      return err;
   }
   return decoded;
};
