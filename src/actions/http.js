
import { defaultTo, get, isEmpty } from 'lodash';
import { ALERT_MESSAGE, ALERT_VARIANT } from '../constants/alert';
import axios from '../utils/axios-utils'
import { dbSetClientInformation, dbSetCustomerTypes, dbSetDashboardCondig, dbSetGenericSelect, dbSetInvoiceConfig, dbSetInvoices, dbSetNotificationEmails, dbSetPaymentMethods, dbSetReceiptParameter, dbSetTimeZone, dbSetXoneConfig } from './database';
import { setAlert, setLoading } from './ui';

export const genericSelect = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/generic-select`;
    try {
      const response = await axios.post(path, payload);
      dispatch(dbSetGenericSelect(response));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.GET_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const genericUpdate = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/generic-update`;
    try {
      await axios.post(path, payload);
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_SUCCESS, ALERT_VARIANT.SUCCESS))
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};


export const getTimeZone = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/time-zone`;
    try {
      dispatch(setLoading(true));
      const response = await axios.get(path);
      if (!isEmpty(response.data[0])) dispatch(dbSetTimeZone(response.data[0]));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.GET_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const updateTimeZone = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/time-zone`;
    try {
      dispatch(setLoading(true));
      await axios.post(path, payload);
      dispatch(getTimeZone());
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_SUCCESS, ALERT_VARIANT.SUCCESS))
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getReceiptParameter = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/receipt-parameter`;
    try {
      dispatch(setLoading(true));
      const response = await axios.get(path);
      if (!isEmpty(response.data)) dispatch(dbSetReceiptParameter({ imp: response.data[0], id: response.data[1], invoiceNum: response.data[2], currency: response.data[3] }));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.GET_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const updateReceiptParameter = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/receipt-parameter`;
    try {
      dispatch(setLoading(true));
      await axios.post(path, payload);
      dispatch(getReceiptParameter());
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_SUCCESS, ALERT_VARIANT.SUCCESS))
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getNotificationEmails = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/notification-emails`;
    try {
      dispatch(setLoading(true));
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
      if (!isEmpty(response.data))
        dispatch(dbSetNotificationEmails(formated_emails));
      else
        dispatch(dbSetNotificationEmails([]));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.GET_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const deleteNotificationEmails = (email) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/notification-emails/${email}`;
    try {
      dispatch(setLoading(true));
      await axios.delete(path);
      dispatch(getNotificationEmails());
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_SUCCESS, ALERT_VARIANT.SUCCESS))
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const updateNotificationEmails = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/notification-emails`;
    try {
      dispatch(setLoading(true));
      await axios.post(path, payload);
      dispatch(getNotificationEmails());
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_SUCCESS, ALERT_VARIANT.SUCCESS))
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};


export const getXoneConfig = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/xone-config`;
    try {
      dispatch(setLoading(true));
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
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.GET_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const updateXoneConfig = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/xone-config`;
    try {
      dispatch(setLoading(true));
      await axios.post(path, payload);
      dispatch(getXoneConfig());
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_SUCCESS, ALERT_VARIANT.SUCCESS))
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getDashboardConfig = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/dashboard-config`;
    try {
      dispatch(setLoading(true));
      const response = await axios.get(path);
      if (!isEmpty(response.data[0])) {
        let initial_fields = [];
        Object.keys(response.data[0]).forEach(key => {
          initial_fields = [
            ...initial_fields,
            { key: key, current: response.data[0][key], updated: "", isDisabled: key === 'id' ? true : false }
          ]
        });
        console.log(initial_fields);
        dispatch(dbSetDashboardCondig(initial_fields))
      }
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.GET_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const updateDashboardConfig = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/dashboard-config`;
    try {
      dispatch(setLoading(true));
      await axios.post(path, payload);
      dispatch(getDashboardConfig());
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_SUCCESS, ALERT_VARIANT.SUCCESS))
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getPaymentMethods = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/payment-methods`;
    try {
      dispatch(setLoading(true));
      const response = await axios.get(path);
      if (!isEmpty(response.data[0])) {
        let initial_fields = [];
        defaultTo(response.data, []).forEach(item => {
          let initial_field = {
            key: get(item, "payform_description", ""),
            current: get(item, "code_timbra_payform", ""),
            updated:
              "",
            isDisabled: false
          }
          initial_fields.push(initial_field);
        });
        dispatch(dbSetPaymentMethods(initial_fields))
      }
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.GET_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const setPaymentMethods = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/generic-update`;
    try {
      dispatch(setLoading(true));
      const response = await axios.post(path, payload);
      dispatch(getPaymentMethods(response));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_SUCCESS, ALERT_VARIANT.SUCCESS))
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getInvoiceConfig = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/invoice-config`;
    try {
      dispatch(setLoading(true));
      const response = await axios.get(path);
      if (!isEmpty(response.data[0])) {
        let initial_fields = [];
        Object.keys(response.data[0]).forEach(key => {
          initial_fields = [
            ...initial_fields,
            { key: key, current: response.data[0][key], updated: "", isDisabled: false }
          ]
        });
        dispatch(dbSetInvoiceConfig(initial_fields))
      }
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.GET_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const updateInvoiceConfig = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/invoice-config`;
    try {
      dispatch(setLoading(true));
      await axios.post(path, payload);
      dispatch(getInvoiceConfig());
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_SUCCESS, ALERT_VARIANT.SUCCESS))
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const updateDocumentTypes = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/document-types`;
    try {
      dispatch(setLoading(true));
      await axios.post(path, {});
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_SUCCESS, ALERT_VARIANT.SUCCESS))
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const updateCurrencyConfig = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/currency-config`;
    try {
      dispatch(setLoading(true));
      await axios.post(path, {});
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_SUCCESS, ALERT_VARIANT.SUCCESS))
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const goLive = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/go-live`;
    try {
      dispatch(setLoading(true));
      await axios.post(path, payload);
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_SUCCESS, ALERT_VARIANT.SUCCESS))
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getInvoices = (payload) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/invoices`;
    try {
      dispatch(setLoading(true));
      const response = await axios.post(path, payload);
      let invoices = defaultTo(response.data.results, [])
      let pagination = defaultTo(response.data.pagination, {})
      dispatch(dbSetInvoices(invoices, pagination))
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.GET_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getClientInformation = (customerId) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/customer/${customerId}`;
    try {
      dispatch(setLoading(true));
      const response = await axios.get(path);
      if (!isEmpty(response.data[0])) {
        let initial_fields = [];
        Object.keys(response.data[0]).forEach(key => {
          initial_fields = [
            ...initial_fields,
            { key: key, current: response.data[0][key], updated: "", isDisabled: key === 'customer_id' ? true : false }
          ]
        });
        dispatch(dbSetClientInformation(initial_fields))
      }
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.GET_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const updateClientInformation = (payload) => {
  let clientId = payload.filter((field) => field.key === 'customer_identification')[0].value;
  return async (dispatch) => {
    const path = `http://localhost:8000/api/customer`;
    try {
      dispatch(setLoading(true));
      await axios.post(path, payload);
      dispatch(getClientInformation(clientId));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_SUCCESS, ALERT_VARIANT.SUCCESS))
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const fordwardInvoice = (payload, pagination) => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/forward-invoice`;
    try {
      dispatch(setLoading(true));
      await axios.post(path, payload);
      dispatch(getInvoices(pagination));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_SUCCESS, ALERT_VARIANT.SUCCESS));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.UPDATE_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getCustomerTypes = () => {
  return async (dispatch) => {
    const path = `http://localhost:8000/api/customer-types`;
    try {
      dispatch(setLoading(true));
      const response = await axios.get(path);
      dispatch(dbSetCustomerTypes(defaultTo(response.data, [])))
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setAlert(ALERT_MESSAGE.GET_ERROR, ALERT_VARIANT.ERROR))
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
