import { message } from "antd";

//FOR ALL

export const messageLoadingLogin = (
   msgLoad,
   msgFinish,
   timeLoad,
   timeFnish
) => {
   message
      .loading(msgLoad, timeLoad)
      .then(() => message.success(msgFinish, timeFnish));
};

export const messageSuccessLogin = (msg, time) => {
   message.success(msg, time);
};

export const messageErrorLogin = (msg, time) => {
   message.error(msg, time);
};

export const messageWarningLogin = (msg, time) => {
   message.warning(msg, time);
};
