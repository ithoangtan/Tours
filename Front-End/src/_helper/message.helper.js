import { message } from "antd";

//FOR ALL

export const messageLoading = (msgLoad, msgFinish, timeLoad, timeFnish) => {
   message
      .loading(msgLoad, timeLoad)
      .then(() => message.success(msgFinish, timeFnish));
};

export const messageSuccess = (msg, time) => {
   message.success(msg, time);
};

export const messageError = (msg, time) => {
   message.error(msg, time);
};

export const messageWarning = (msg, time) => {
   message.warning(msg, time);
};
