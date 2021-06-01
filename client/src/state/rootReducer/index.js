import { combineReducers } from "redux";

import sideBarReducer from "../sidebar/sidebarReducer";
import authReducer from "../auth/authReducer";
import authErrorReducer from "../auth/authErrorReducer";

const rootReducer = combineReducers({
    sideBarReducer,
    authReducer,
    authErrorReducer,
});

export default rootReducer;
