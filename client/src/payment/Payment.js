import axios from "axios";
import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const Payment = () => {
    const [product, setProduct] = useState({
        title: "shirt",
        price: 200,
        productBy: "addidas",
    });

    const makePayment = async (token) => {
        const body = {
            token,
            product,
        };
        const result = await axios.post("/api/payment/pay", body);
        console.log(result);
    };

    return (
        <div>
            <StripeCheckout
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
                token={makePayment}
                name="ashish oli"
                amount={product.price * 100}
            />
        </div>
    );
};

export default Payment;
