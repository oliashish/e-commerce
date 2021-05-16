import { combineReducers } from "redux";

import sideBarReducer from "../sidebar/sidebarReducer";

const rootReducer = combineReducers({
    sideBarReducer,
});

export default rootReducer;
