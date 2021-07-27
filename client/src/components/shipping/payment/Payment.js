import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import displayRazorpay from "./razorpay";

const Payment = (props) => {
    const history = useHistory();
    const { userInfo } = useSelector((state) => state.auth);
    const { cartItems, shippingAddress } = useSelector((state) => state.cart);

    useEffect(() => {
        if (!userInfo) history.push("/login");
        if (!shippingAddress) history.push("/shipping/address");
        if (!cartItems) history.push("/");

        async function payment() {
            const { state } = props.location;
            let total = 0;
            state[0].forEach((prod) => {
                total += prod.price * prod.qty;
            });

            const data = await displayRazorpay(
                total,
                shippingAddress,
                userInfo
            );
        }

        payment();
    }, [props, history, userInfo, shippingAddress, cartItems]);

    return <div></div>;
};

export default Payment;
