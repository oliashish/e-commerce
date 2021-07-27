import Axios from "axios";
import { loadScript } from "./script_loader";

const displayRazorpay = async (amount, shippingAddress, userInfo) => {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
        return;
    }
    const { data } = await Axios.post("/api/payments/pay", {
        amountTotal: amount,
    });
    console.log("data recieved is : ", data);
    const razorpay_options = {
        key: process.env.EACT_APP_RAZORPAY_SECRET_KEY,
        amount: data.amuont,
        currency: data.currency,
        name: "Aura Apex",
        order_id: data.id,
        description: "Keep shopping",

        prefill: {
            name: userInfo.username,
            email: userInfo.email,
            contact: userInfo.contact_number,
        },

        handler: function (response) {
            return response.data;
        },
    };

    const paymentForm = new window.Razorpay(razorpay_options);

    paymentForm.open();
};

export default displayRazorpay;
