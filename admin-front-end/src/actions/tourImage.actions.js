import * as tourApis from "../apis/tourImage.api";
import * as tourConstants from "../constants/tourImage.module";

export const fetchListTourImage = () => {
   return {
      type: tourConstants.FETCH_TOUR_IMAGE
   };
};

// //List Tour
// export const fetchListTourImageSuccess = data => {
//    return {
//       type: tourConstants.FETCH_TOUR_IMAGE_SUCCESS,
//       payload: {
//          // Thường đi làm thì người ta hay gọi là FETCH
//          //data gửi kèm trong actions là payload ở vị trí này
//          data
//       }
//    };
// };

// export const fetchListTourImageError = error => {
//    return {
//       type: tourConstants.FETCH_TOUR_IMAGE_FAILED,
//       payload: {
//          error
//       }
//    };
// };
// /**
//  * B1: fetch isImageRequest()
//  * B2: ResetL state Images --> []
//  * B3: Khi API thành công thì vào then:
//  * fetchListTourImageSucces (data response)
//  *
//  */
// export const fetchListTourImageRequest = idTour => {
//    return dispatch => {
//       dispatch(fetchListTourImage()); //reset state Images-->[]
//       tourApis
//          .getListImageTourById(idTour)
//          .then(resp => {
//             const { data } = resp;
//             dispatch(fetchListTourImageSuccess(data));
//          })
//          .catch(error => {
//             dispatch(fetchListTourImageError(error));
//          });
//    };
// };

//Delete Tour
export const fetchDeleteTourImageSuccess = (record, data) => {
   return {
      type: tourConstants.FETCH_TOUR_IMAGE_DELETE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      record: { record }
   };
};

export const fetchDeleteTourImageError = error => {
   return {
      type: tourConstants.FETCH_TOUR_IMAGE_DELETE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchDeleteTourImageRequest = record => {
   return dispatch => {
      tourApis
         .deleteImageTour(record.idTour)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchDeleteTourImageSuccess(record, data));
         })
         .catch(error => {
            dispatch(fetchDeleteTourImageError(error));
         });
   };
};

//Upload image
export const fetchUploadTourImageSuccess = (idTour, data) => {
   return {
      type: tourConstants.FETCH_TOUR_UPLOAD_IMAGE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      idTour: idTour
   };
};

export const fetchUploadTourImageError = error => {
   return {
      type: tourConstants.FETCH_TOUR_UPLOAD_IMAGE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchUploadTourImageRequest = (formData, idTour) => {
   return dispatch => {
      tourApis
         .uploadImageTour(formData, idTour)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchUploadTourImageSuccess(idTour, data));
         })
         .catch(error => {
            dispatch(fetchUploadTourImageError(error));
         });
   };
};
