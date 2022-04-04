import { TYPES } from '../constants/types';

export const loginUsernameAndPassword = (username, password) => {
    const validUser = "username";
    const validPwd = "password";

    return (dispatch) => {
        if (username === validUser && password === validPwd) {
            dispatch(login(true))
        } else {
            dispatch(login(false))
        }
    }
}

export const login = (isAuth) => {
    return {
        type: TYPES.login,
        payload: { isAuth }
    }
}