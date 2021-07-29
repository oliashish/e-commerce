import { LogIn, LogOut, SignUp } from "../../helper/api/auth";
import {
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_ERROR,
    SIGNUP_ERROR,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
} from "../actionConstants";

const signup = (data) => {
    return async (dispatch) => {
        dispatch({ type: SIGNUP_REQUEST });
        const newUser = await SignUp(data);
    
        if (newUser.status === 200) {
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: newUser.data,
            });
        } else if (newUser.data.message) {
            dispatch({
                type: SIGNUP_ERROR,
                payload: newUser.data.message,
            });
        }
    };
};

const login = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });

        const response = await LogIn(email, password);

        if (response.status === 200) {
            dispatch({ type: LOGIN_SUCCESS, payload: response.data });
        } else if (response.status === 401) {
            dispatch({ type: LOGIN_ERROR, payload: response.data.message });
        } else {
            dispatch({
                type: LOGIN_ERROR,
                payload: "something went wronge try again...",
            });
        }
    };
};

const logout = () => {
    return async (dispatch) => {
        try {
            const response = await LogOut(); // this request is to clear the cookie

            if (response.status === 200) dispatch({ type: LOGIN_SUCCESS });
        } catch (err) {
            dispatch({
                type: LOGOUT_ERROR,
                payload: err.message,
            });
        }
    };
};

export { login, logout, signup };
