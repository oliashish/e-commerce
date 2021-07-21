import {
    INDIVIDUAL_PRODUCT_ERROR,
    INDIVIDUAL_PRODUCT_REQUEST,
    INDIVIDUAL_PRODUCT_SUCCESS,
    PRODUCT_ERROR,
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
} from "../actionConstants";

export const productReducer = (state = { products: [], loading: true },action) => {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return { loading: true };
        case PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            };
        case PRODUCT_ERROR:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const productDetailReducer = (state = { product: {} },action) => {
    switch (action.type) {
        case INDIVIDUAL_PRODUCT_REQUEST:
            return { loading: true };
        case INDIVIDUAL_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };
        case INDIVIDUAL_PRODUCT_ERROR:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
