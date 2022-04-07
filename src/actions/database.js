import { TYPES } from "../constants/types";


export const dbSetTimeZone = ({time_zone}) => {
    return {
        type: TYPES.dbSetTimeZone,
        payload: time_zone
    }
};