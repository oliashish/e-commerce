import {
    INDIVIDUAL_PRODUCT_ERROR,
    INDIVIDUAL_PRODUCT_REQUEST,
    INDIVIDUAL_PRODUCT_SUCCESS,
    PRODUCT_ERROR,
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
} from "../actionConstants";

import data from "../../data/data";

export const productAction = () => {
    return async (dispatch) => {
        dispatch({ type: PRODUCT_REQUEST });

        // todo - get call here for product from backend and before that dispatch product_request

        try {
            const products = data; // axios call here
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
            const product = data.find((d) => d.id === productId); // axios call here for product by id
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
