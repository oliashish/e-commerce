import {
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_ERROR,
    LOGOUT_SUCCESS,
    SIGNUP_ERROR,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
} from "../actionConstants";



const authReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return { loading: true };

        case SIGNUP_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
            };

        case SIGNUP_ERROR:
            return {
                loading: false,
                error: action.payload,
            };

        case LOGIN_REQUEST:
            return { loading: true };

        case LOGIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
            };
        case LOGIN_ERROR:
            return {
                loading: false,
                error: action.payload,
            };
        case LOGOUT_SUCCESS:
            return {};
        case LOGOUT_ERROR:
            return { error: action.payload };
        default:
            return state;
    }
};
export default authReducer;
