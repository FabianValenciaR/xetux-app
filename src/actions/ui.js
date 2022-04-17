import { TYPES } from "../constants/types";

export const setError = (err) => ({
    type: TYPES.uiSetError,
    payload: err
})

export const setLoading = (loading) => ({
    type: TYPES.uiSetLoading,
    payload: loading
})

export const setTitle = (title) => ({
    type: TYPES.uiSetTitle,
    payload: title
})

export const removeError = () => ({
    type: TYPES.uiRemoveError,
})