import data from "../../data/data";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionConstants";

export const addToCart = (productId, qty) => {
    return async (dispatch) => {
        const product = data.find((prod) => prod.id === productId);
        const { id, name, price, image, sku, brand } = product;
        dispatch({
            type: ADD_TO_CART,
            payload: {
                id,
                name,
                brand,
                price,
                image,
                sku,
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