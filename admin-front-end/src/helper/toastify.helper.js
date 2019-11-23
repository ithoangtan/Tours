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
      toast(`${data.length} record loaded!`, {
         position: toast.POSITION.BOTTOM_RIGHT,
         className: "notice-load-data"
      });
      // toast.done(`${data.length} record loaded!`);
   }
};

export const toastCreateSuccess = newData => {
   if (newData !== null && newData !== "") {
      toast.success(`ID: ${newData.idTour}, ${newData.titleTour} created!`);
   }
};

export const toastDeleteSuccess = record => {
   if (record !== null && record !== "") {
      toast.warn(`ID: ${record.idTour}, ${record.titleTour} deleted!`);
   }
};

export const toastDeleteImageSuccess = file => {
   if (file !== null && file !== "") {
      toast.warn(`ID: ${file.idImage}, ${file.name} deleted!`);
   }
};

export const toastPatchSuccess = newRecord => {
   if (newRecord !== null && newRecord !== "") {
      toast.info(`ID: ${newRecord.idTour}, ${newRecord.titleTour} updated!`);
   }
};
