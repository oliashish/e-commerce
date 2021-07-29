import {
    INDIVIDUAL_PRODUCT_ERROR,
    INDIVIDUAL_PRODUCT_REQUEST,
    INDIVIDUAL_PRODUCT_SUCCESS,
    PRODUCT_ERROR,
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
} from "../actionConstants";

import { getAllProduct, getProductById } from "../../helper/api/product";

export const productAction = () => {
    return async (dispatch) => {
        dispatch({ type: PRODUCT_REQUEST });

        

        try {
            const products = await getAllProduct(); // axios call here
            dispatch({
                type: PRODUCT_SUCCESS,
                payload: products,
            });
        } catch (err) {
            dispatch({ type: PRODUCT_ERROR, payload: err.message });
        }
    };
};

export const detailsProductAction = (productId) => {
    return async (dispatch) => {
        dispatch({
            type: INDIVIDUAL_PRODUCT_REQUEST,
            payload: productId,
        });
        try {
            const product = await getProductById(productId); // axios call here for product by id
            dispatch({
                type: INDIVIDUAL_PRODUCT_SUCCESS,
                payload: product,
            });
        } catch (err) {
            dispatch({
                type: INDIVIDUAL_PRODUCT_ERROR,
                payload:
                    err.response && err.response.data
                        ? err.data.message
                        : err.msg,
            });
        }
    };
};
