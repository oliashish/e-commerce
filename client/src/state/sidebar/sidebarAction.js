import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../actionConstants";

export const closeSidebar = () => {
    return async (dispatch) => {
        dispatch({
            type: CLOSE_SIDEBAR,
        });
    };
};
export const openSidebar = () => {
    return async (dispatch) => {
        dispatch({
            type: OPEN_SIDEBAR,
        });
    };
};
