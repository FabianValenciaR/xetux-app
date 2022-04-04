import { TYPES } from "../constants/types";

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case TYPES.login:
            return action.payload.isAuth;

        case TYPES.logout:
            return action.payload.isAuth;

        default:
            return false;
    }

}