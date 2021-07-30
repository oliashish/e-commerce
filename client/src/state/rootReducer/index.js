import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "../auth/authReducer";
import {
    productReducer,
    productDetailReducer,
} from "../products/productReducer";
import { cartReducer } from "../cart/cartReducer";
import { sidebarReducer } from "../sidebar/sidebarReducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "cart"],
};
const rootReducer = combineReducers({
    auth: authReducer,
    productList: productReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    sidebar: sidebarReducer,
});

export default persistReducer(persistConfig, rootReducer);
