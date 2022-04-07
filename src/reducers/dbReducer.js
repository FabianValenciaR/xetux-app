import { TYPES } from "../constants/types";

const initialState = {
    time_zone: ""
}

export const dbReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.dbSetTimeZone:
            return {
                ...state,
                time_zone: action.payload
            }

        default:
            return state
    }

}