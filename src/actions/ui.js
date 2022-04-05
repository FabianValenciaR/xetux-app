import { TYPES } from "../constants/types";

export const setError = (err) => ({
    type: TYPES.uiSetError,
    payload: err
})

export const removeError = () => ({
    type: TYPES.uiRemoveError,
})