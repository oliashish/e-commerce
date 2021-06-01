import { SIGNUP_SUCCESS } from "../actionConstants";

let initial_auth_state = {
    isLoggedIn: localStorage.getItem("isLoggedIn"),
    token: localStorage.getItem("token"),
    user: {
        username: "",
        email: "",
        id: "",
    },
    fail: {
        msg: "",
    },
};

const authReducer = (state = initial_auth_state, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            localStorage.setItem("isLoggedIn", true);

            return {
                token: localStorage.setItem("token", action.payload[0]),
                user: action.payload[1],
            };

        default:
            return state;
    }
};
export default authReducer;
