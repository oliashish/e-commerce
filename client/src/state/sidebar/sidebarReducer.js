import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../actionConstants";

export const sidebarReducer = (state = { isOpen: false }, action) => {
    switch (action.type) {
        case CLOSE_SIDEBAR:
            return {
                isOpen: false,
            };
        case OPEN_SIDEBAR:
            return {
                isOpen: true,
            };
        default:
            return state;
    }
};
