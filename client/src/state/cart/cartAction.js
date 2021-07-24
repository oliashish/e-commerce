import { getProductById } from "../../helper/api/product";
import { SaveuserAddress } from "../../helper/api/userAddress";

import {
    ADD_TO_CART,
    EMPTY_CART,
    REMOVE_FROM_CART,
    SAVE_ADDRESS,
    SAVE_ADDRESS_ERROR,
} from "../actionConstants";

export const addToCart = (productId, qty) => {
    return async (dispatch) => {
        const { id, name, price, image, sku, brand, category } =
            await getProductById(productId);

        dispatch({
            type: ADD_TO_CART,
            payload: {
                id,
                name,
                brand,
                price,
                image,
                sku,
                category,
                qty,
            },
        });
    };
};

export const removeFromCart = (productId) => {
    return async (dispatch) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: productId,
        });
    };
};

export const saveAddress = (data) => {
    return async (dispatch) => {
        const userAddress = await SaveuserAddress(data);
        if (userAddress.status === 200) {
            dispatch({
                type: SAVE_ADDRESS,
                payload: userAddress.data,
            });
        } else {
            dispatch({
                type: SAVE_ADDRESS_ERROR,
                payload: "something went wrong try again...",
            });
        }
    };
};

export const emptyCart = () => {
    return async (dispatch) => dispatch({ type: EMPTY_CART });
};
