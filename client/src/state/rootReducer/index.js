import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sideBarReducer from "../sidebar/sidebarReducer";
import authReducer from "../auth/authReducer";
import authErrorReducer from "../auth/authErrorReducer";

const rootReducer = combineReducers({
    sideBar: sideBarReducer,
    auth: authReducer,
    authFail: authErrorReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["sidebar", "auth", "authFail"],
};

export default persistReducer(persistConfig, rootReducer);
