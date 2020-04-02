import axiosService from "../_commons/axios.service";
import { API_ENDPOINT } from "../_constants/index.constants";
const url = "timeline";
const urls = "timelines";

export const getListTimeline = () => {
   return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const getTimelineById = idTimeline => {
   return axiosService.get(`${API_ENDPOINT}/${url}?idTimeline=${idTimeline}`);
};

export const postTimeline = data => {
   return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const deleteTimeline = idTimelines => {
   return axiosService.delete(
      `${API_ENDPOINT}/${url}?idTimelines=${idTimelines}`
   );
};

export const patchTimeline = data => {
   return axiosService.put(`${API_ENDPOINT}/${url}`, data);
};
