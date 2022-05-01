import { TYPES } from "../constants/types";

const initialState = {
    isAuthenticated: false
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case TYPES.login:
            return {
                ...state,
                isAuthenticated: action.payload
            }

        case TYPES.logout:
            return {
                ...state,
                isAuthenticated: action.payload
            }

        default:
            return { ...state };
    }

}