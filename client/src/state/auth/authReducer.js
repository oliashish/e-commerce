import { SIGNUP_SUCCESS } from "../actionConstants";

let initial_auth_state = {
    isLoggedIn: false,
    username: "",
    email: "",
    id: "",
};

const authReducer = (state = initial_auth_state, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            const newAuthState = {
                isLoggedIn: true,
                username: action.payload.username,
                id: action.payload.id,
                email: action.payload.email,
            };

            return {
                newAuthState,
            };

        default:
            return state;
    }
};
export default authReducer;
