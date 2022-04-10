
import axios from '../utils/axios-utils'
import { dbSetTimeZone } from './database';

export const getTimeZone = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/time-zone`;
    try {
      // dispatch(setLoading(true));
      const response = await axios.get(path);
      if (response.data) dispatch(dbSetTimeZone(response.data));
    } catch (e) {
      // dispatch(setLoading(false));
      console.error(e);
    } finally {
      // dispatch(setLoading(false));
    }
  };
};

export const updateTimeZone = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/time-zone`;
    try {
      // dispatch(setLoading(true));
      await axios.post(path, payload);
      // dispatch(setLoading(false));
    } catch (e) {
      // dispatch(setLoading(false));
      console.error(e);
    } finally {
      // dispatch(setLoading(false));
    }
  };
};