
import { isEmpty } from 'lodash';
import axios from '../utils/axios-utils'
import { dbSetDashboardCondig, dbSetGenericSelect, dbSetNotificationEmails, dbSetReceiptParameter, dbSetTimeZone, dbSetXoneConfig } from './database';

export const genericSelect = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/generic-select`;
    try {
      const response = await axios.post(path, payload);
      dispatch(dbSetGenericSelect(response));
    } catch (e) {
      // dispatch(setLoading(false));
      console.error(e);
    } finally {
      // dispatch(setLoading(false));
    }
  };
};

export const genericUpdate = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/generic-update`;
    try {
      await axios.post(path, payload);
    } catch (e) {
      // dispatch(setLoading(false));
      console.error(e);
    } finally {
      // dispatch(setLoading(false));
    }
  };
};


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
      dispatch(getTimeZone());
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

export const updateReceiptParameter = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/receipt-parameter`;
    try {
      // dispatch(setLoading(true));
      await axios.post(path, payload);
      dispatch(getReceiptParameter());
    } catch (e) {
      // dispatch(setLoading(false));
      console.error(e);
    } finally {
      // dispatch(setLoading(false));
    }
  };
};

export const getNotificationEmails = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/notification-emails`;
    try {
      // dispatch(setLoading(true));
      const response = await axios.get(path);
      let formated_emails = [];
      response.data.forEach(notiEmail => {
        let notifyInventory = notiEmail.EnviarInventario === "1" ? true : false;
        let notifySales = notiEmail.EnviarVentas === "1" ? true : false;
        formated_emails = [
          ...formated_emails,
          { id: notiEmail.Correo, email: notiEmail.Correo, notifyInventory: notifyInventory, notifySales: notifySales }
        ]
      });
      if (!isEmpty(response.data)) dispatch(dbSetNotificationEmails(formated_emails));
    } catch (e) {
      // dispatch(setLoading(false));
      console.error(e);
    } finally {
      // dispatch(setLoading(false));
    }
  };
};

export const getXoneConfig = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/xone-config`;
    try {
      // dispatch(setLoading(true));
      const response = await axios.get(path);
      if (!isEmpty(response.data[0])) {
        let initial_fields = [];
        Object.keys(response.data[0]).forEach(key => {
          initial_fields = [
            ...initial_fields,
            { key: key, current: response.data[0][key], updated: "", isDisabled: false }
          ]
        });
        dispatch(dbSetXoneConfig(initial_fields))
      }
    } catch (e) {
      // dispatch(setLoading(false));
      console.error(e);
    } finally {
      // dispatch(setLoading(false));
    }
  };
};

export const updateXoneConfig = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/xone-config`;
    try {
      // dispatch(setLoading(true));
      await axios.post(path, payload);
      dispatch(getXoneConfig());
    } catch (e) {
      // dispatch(setLoading(false));
      console.error(e);
    } finally {
      // dispatch(setLoading(false));
    }
  };
};

export const getDashboardConfig = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/dashboard-config`;
    try {
      // dispatch(setLoading(true));
      const response = await axios.get(path);
      if (!isEmpty(response.data[0])) dispatch(dbSetDashboardCondig(response.data[0]));
    } catch (e) {
      // dispatch(setLoading(false));
      console.error(e);
    } finally {
      // dispatch(setLoading(false));
    }
  };
};

export const updateDashboardConfig = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/dashboard-config`;
    try {
      // dispatch(setLoading(true));
      await axios.post(path, payload);
      dispatch(getDashboardConfig());
    } catch (e) {
      // dispatch(setLoading(false));
      console.error(e);
    } finally {
      // dispatch(setLoading(false));
    }
  };
};
