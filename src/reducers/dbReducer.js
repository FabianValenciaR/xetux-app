import { TYPES } from "../constants/types";

const initialState = {
    time_zone: "",
    generic_select: []
}

export const dbReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.dbSetGenericSelect:
            return {
                ...state,
                generic_select: action.payload
            }

        case TYPES.dbSetTimeZone:
            return {
                ...state,
                time_zone: action.payload
            }

        case TYPES.dbSetReceiptParameter:
            return {
                ...state,
                8: action.payload["8"],
                12: action.payload["12"],
                20: action.payload["20"],
                21: action.payload["21"]
            }

        default:
            return state
    }

}