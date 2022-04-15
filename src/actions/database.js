import { TYPES } from "../constants/types";



export const dbSetGenericSelect = ({data}) => {
    return {
        type: TYPES.dbSetGenericSelect,
        payload: data
    }
};

export const dbSetTimeZone = ({ time_zone }) => {
    return {
        type: TYPES.dbSetTimeZone,
        payload: time_zone
    }
};

export const dbSetReceiptParameter = ({ imp, id, invoiceNum, currency }) => {
    return {
        type: TYPES.dbSetReceiptParameter,
        payload: {
            8: Object.values(imp)[0],
            12: Object.values(id)[0],
            20: Object.values(invoiceNum)[0],
            21: Object.values(currency)[0],
        }
    }
};
