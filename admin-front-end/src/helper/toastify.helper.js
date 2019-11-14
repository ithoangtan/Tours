import { toast } from "react-toastify";

export const toastError = error => {
   let message = null;
   if (typeof error === "object" && error.message) ({ message } = error);
   if (message !== null && typeof message !== "undefined" && message !== "") {
      toast.error(error.message);
   }
};

export const toastSuccess = data => {
   if (data !== null && data !== "") {
      toast.success(`${data.length} tasks được up luôn nha mí bạn`);
   }
};
