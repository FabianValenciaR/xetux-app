import { ALERT_MESSAGE, ALERT_VARIANT } from "../constants/alert";
import { TYPES } from "../constants/types";

const initialState = {
    loading: false,
    title: "",
    msgError: null,
    alert_info: {
        message: "",
        severity: ""
    }
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

        case TYPES.uiSetAlert:
            return {
                ...state,
                alert_info: action.payload
            }

        default:
            return state
    }

}