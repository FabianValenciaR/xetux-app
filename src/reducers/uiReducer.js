import { TYPES } from "../constants/types";

const initialState = {
    loading: false,
    title: "",
    msgError: null
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }

        case TYPES.uiSetLoading:
            return {
                ...state,
                loading: action.payload
            }

        case TYPES.uiSetTitle:
            return {
                ...state,
                title: action.payload
            }

        case TYPES.uiRemoveError:
            return {
                ...state,
                msgError: null
            }

        default:
            return state
    }

}