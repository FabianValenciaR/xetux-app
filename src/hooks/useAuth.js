import React, { useState } from 'react'

const useAuth = () => {
    const validUser = "username";
    const validPwd = "password";
    const [state, setState] = useState(false);
    
    const login = (username, password) => {
        if (username === validUser && password === validPwd) {
            setState(true)
        } else {
            setState(false)
        }
    }

    const logout = () => {
        setState(false)
    }

    return {
        state,
        login,
        logout
    }
}

export default useAuth