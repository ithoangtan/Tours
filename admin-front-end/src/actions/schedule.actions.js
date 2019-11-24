import * as scheduleApis from "../apis/schedule.api";
import * as scheduleConstants from "../constants/schedule.module";

export const fetchListSchedule = () => {
   return {
      type: scheduleConstants.FETCH_SCHEDULE
   };
};

//List Tour
export const fetchListScheduleSuccess = data => {
   return {
      type: scheduleConstants.FETCH_SCHEDULE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      }
   };
};

export const fetchListScheduleError = error => {
   return {
      type: scheduleConstants.FETCH_SCHEDULE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchListScheduleRequest = () => {
   return dispatch => {
      dispatch(fetchListSchedule()); //reset state tours-->[]
      scheduleApis
         .getListSchedule()
         .then(resp => {
            const { data } = resp;
            dispatch(fetchListScheduleSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListScheduleError(error));
         });
   };
};

//Get Schedule By  ID Tour
export const fetchScheduleByIdTourSuccess = data => {
   return {
      type: scheduleConstants.FETCH_SCHEDULE_GET_BYID_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchScheduleByIdTourError = error => {
   return {
      type: scheduleConstants.FETCH_SCHEDULE_GET_BYID_FAILED,
      payload: {
         error
      }
   };
};

export const fetchScheduleByIdTourRequest = idTour => {
   return dispatch => {
      scheduleApis
         .getScheduleByIdTour(idTour)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchScheduleByIdTourSuccess(data));
         })
         .catch(error => {
            dispatch(fetchScheduleByIdTourError(error));
         });
   };
};

//Get Schedule By  ID SCHEDULE
export const fetchScheduleByIdSuccess = data => {
   return {
      type: scheduleConstants.FETCH_SCHEDULE_GET_BYID_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchScheduleByIdError = error => {
   return {
      type: scheduleConstants.FETCH_SCHEDULE_GET_BYID_FAILED,
      payload: {
         error
      }
   };
};

export const fetchScheduleByIdRequest = idSchedule => {
   return dispatch => {
      scheduleApis
         .getScheduleById(idSchedule)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchScheduleByIdSuccess(data));
         })
         .catch(error => {
            dispatch(fetchScheduleByIdError(error));
         });
   };
};

//POST Schedule - create
export const fetchPostScheduleSuccess = (schedule, data) => {
   return {
      type: scheduleConstants.FETCH_SCHEDULE_CREATE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      schedule: { schedule }
   };
};

export const fetchPostScheduleError = error => {
   return {
      type: scheduleConstants.FETCH_SCHEDULE_CREATE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPostScheduleRequest = schedule => {
   return dispatch => {
      scheduleApis
         .postSchedule(schedule)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPostScheduleSuccess(schedule, data));
         })
         .catch(error => {
            dispatch(fetchPostScheduleError(error));
         });
   };
};
//end Create Schedule

//Delete Schedule
export const fetchDeleteScheduleSuccess = (record, data) => {
   return {
      type: scheduleConstants.FETCH_SCHEDULE_DELETE_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      record: { record }
   };
};

export const fetchDeleteScheduleError = error => {
   return {
      type: scheduleConstants.FETCH_SCHEDULE_DELETE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchDeleteScheduleRequest = record => {
   return dispatch => {
      scheduleApis
         .deleteSchedule(record.idSchedule)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchDeleteScheduleSuccess(record, data));
         })
         .catch(error => {
            dispatch(fetchDeleteScheduleError(error));
         });
   };
};

//PATCH Schedule
export const fetchPatchScheduleSuccess = (schedule, data) => {
   return {
      type: scheduleConstants.FETCH_SCHEDULE_PATCH_SUCCESS,
      payload: {
         // Thường đi làm thì người ta hay gọi là FETCH
         //data gửi kèm trong actions là payload ở vị trí này
         data
      },
      schedule: { schedule }
   };
};

export const fetchPatchScheduleError = error => {
   return {
      type: scheduleConstants.FETCH_SCHEDULE_PATCH_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPatchScheduleRequest = schedule => {
   return dispatch => {
      scheduleApis
         .patchSchedule(schedule)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPatchScheduleSuccess(schedule, data));
         })
         .catch(error => {
            dispatch(fetchPatchScheduleError(error));
         });
   };
};
