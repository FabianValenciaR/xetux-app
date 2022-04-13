
import { isEmpty } from 'lodash';
import axios from '../utils/axios-utils'
import { dbSetReceiptParameter, dbSetTimeZone } from './database';

export const getTimeZone = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/time-zone`;
    try {
      // dispatch(setLoading(true));
      const response = await axios.get(path);
      if (!isEmpty(response.data[0])) dispatch(dbSetTimeZone(response.data[0]));
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

export const getReceiptParameter = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/receipt-parameter`;
    try {
      // dispatch(setLoading(true));
      const response = await axios.get(path);
      if (!isEmpty(response.data)) dispatch(dbSetReceiptParameter({ imp: response.data[0], id: response.data[1], invoiceNum: response.data[2], currency: response.data[3] }));
    } catch (e) {
      // dispatch(setLoading(false));
      console.error(e);
    } finally {
      // dispatch(setLoading(false));
    }
  };
};