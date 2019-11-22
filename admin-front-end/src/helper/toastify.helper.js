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
      toast.success(`${data.length} record loaded!`);
   }
};

export const toastDeleteSuccess = record => {
   if (record !== null && record !== "") {
      toast.info(`ID: ${record.idTour}, ${record.titleTour} deleted!`);
   }
};
export const toastPatchSuccess = newRecord => {
   if (newRecord !== null && newRecord !== "") {
      toast.info(`ID: ${newRecord.idTour}, ${newRecord.titleTour} updated!`);
   }
};
