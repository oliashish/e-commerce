import { SIGNUP_SUCCESS, GET_ERROR } from "../actionConstants";
import { SignUp } from "../../helper/api/auth";

const authAction = (userState, history) => {
    return async (dispatch) => {
        const response = await SignUp(userState);
        const data = response.data;

        if (data.success) {
            dispatch({ type: SIGNUP_SUCCESS, payload: data.success });
            history.push("/");
        } else {
            dispatch({ type: GET_ERROR, payload: data });
        }
    };
};

export default authAction;
