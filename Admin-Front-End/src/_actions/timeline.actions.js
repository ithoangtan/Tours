import * as timelineApis from "../_apis/timeline.api";
import * as timelineConstants from "../_constants/timeline.module";

export const fetchListTimeline = () => {
   return {
      type: timelineConstants.FETCH_TIMELINE
   };
};

//List Timeline
export const fetchListTimelineSuccess = data => {
   return {
      type: timelineConstants.FETCH_TIMELINE_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchListTimelineError = error => {
   return {
      type: timelineConstants.FETCH_TIMELINE_FAILED,
      payload: {
         error
      }
   };
};
/**
 * B1: fetch isTimelineRequest()
 * B2: ResetL state timelines --> []
 * B3: Khi API thành công thì vào then:
 * fetchListTimelineSucces (data response)
 *
 */
export const fetchListTimelineRequest = () => {
   return dispatch => {
      dispatch(fetchListTimeline()); //reset state timelines-->[]
      timelineApis
         .getListTimeline()
         .then(resp => {
            const { data } = resp;
            dispatch(fetchListTimelineSuccess(data));
         })
         .catch(error => {
            dispatch(fetchListTimelineError(error));
         });
   };
};

//GET TIMELINE BY ID
export const fetchTimelineByIdSuccess = data => {
   return {
      type: timelineConstants.FETCH_TIMELINE_GET_BYID_SUCCESS,
      payload: {
         data
      }
   };
};

export const fetchTimelineByIdError = error => {
   return {
      type: timelineConstants.FETCH_TIMELINE_GET_BYID_FAILED,
      payload: {
         error
      }
   };
};

export const fetchTimelineByIdRequest = idTimelines => {
   return dispatch => {
      timelineApis
         .getTimelineById(idTimelines)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchTimelineByIdSuccess(data));
         })
         .catch(error => {
            dispatch(fetchTimelineByIdError(error));
         });
   };
};
//end Get Timeline By ID

//POST Timeline - create
export const fetchPostTimelineSuccess = (newRecord, data) => {
   return {
      type: timelineConstants.FETCH_TIMELINE_CREATE_SUCCESS,
      payload: {
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPostTimelineError = error => {
   return {
      type: timelineConstants.FETCH_TIMELINE_CREATE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPostTimelineRequest = newRecord => {
   return dispatch => {
      timelineApis
         .postTimeline(newRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPostTimelineSuccess(newRecord, data));
         })
         .catch(error => {
            dispatch(fetchPostTimelineError(error));
         });
   };
};
//end Create Timeline

//Delete Timeline
export const fetchDeleteTimelineSuccess = (record, data) => {
   return {
      type: timelineConstants.FETCH_TIMELINE_DELETE_SUCCESS,
      payload: {
         data
      },
      record: { record }
   };
};

export const fetchDeleteTimelineError = error => {
   return {
      type: timelineConstants.FETCH_TIMELINE_DELETE_FAILED,
      payload: {
         error
      }
   };
};

export const fetchDeleteTimelineRequest = record => {
   return dispatch => {
      timelineApis
         .deleteTimeline(record.idTimelines)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchDeleteTimelineSuccess(record, data));
         })
         .catch(error => {
            dispatch(fetchDeleteTimelineError(error));
         });
   };
};

//PATCH Timeline
export const fetchPatchTimelineSuccess = (newRecord, data) => {
   return {
      type: timelineConstants.FETCH_TIMELINE_PATCH_SUCCESS,
      payload: {
         data
      },
      newRecord: { newRecord }
   };
};

export const fetchPatchTimelineError = error => {
   return {
      type: timelineConstants.FETCH_TIMELINE_PATCH_FAILED,
      payload: {
         error
      }
   };
};

export const fetchPatchTimelineRequest = updateRecord => {
   return dispatch => {
      timelineApis
         .patchTimeline(updateRecord)
         .then(resp => {
            const { data } = resp;
            dispatch(fetchPatchTimelineSuccess(updateRecord, data));
         })
         .catch(error => {
            dispatch(fetchPatchTimelineError(error));
         });
   };
};
