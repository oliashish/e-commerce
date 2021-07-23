import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SAVE_ADDRESS,
} from "../actionConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find((it) => it.id === item.id);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((it) =>
                        it.id === existItem.id ? item : it
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (it) => it.id !== action.payload
                ),
            };

        case SAVE_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload,
            };
        default:
            return state;
    }
};
