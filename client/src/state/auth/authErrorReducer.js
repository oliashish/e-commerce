import { GET_ERROR, CLEAR_ERRORS } from "../actionConstants.js";

const initial_state = {
    msg: "",
    status: null,
};

const authErrorReducer = (userErrorState = initial_state, action) => {
    switch (action.type) {
        case GET_ERROR:
            return {
                msg: action.payload.msg,
                status: 401,
            };
        case CLEAR_ERRORS:
            return {
                initial_state,
            };
        default:
            return userErrorState;
    }
};

export default authErrorReducer;
