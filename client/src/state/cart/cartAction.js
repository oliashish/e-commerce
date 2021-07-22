import { getProductById } from "../../helper/api/product";

import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionConstants";

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
