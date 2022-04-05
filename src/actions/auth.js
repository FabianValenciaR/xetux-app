import { TYPES } from '../constants/types';
import { setError } from './ui';

export const loginUsernameAndPassword = (username, password) => {
    const validUser = "username";
    const validPwd = "password";

    return (dispatch) => {
        if (username === validUser && password === validPwd) {
            dispatch(login(true))
        } else {
            dispatch(setError("Usuario y clave incorrecta."))
            dispatch(login(false))
        }
    }
}

export const login = (isAuth) => {
    localStorage.setItem('isAuth', isAuth);
    return {
        type: TYPES.login,
        payload: { isAuth }
    }
}