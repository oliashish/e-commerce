const { v4: uuid } = require("uuid");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const Pay = async (data) => {
    const { amountTotal } = data;
    console.log(data.amountTotal);
    const payment_capture = 1;
    const currency = "INR";
    const amount = amountTotal;

    const options = {
        amount,
        currency,
        receipt: uuid(),
        payment_capture,
    };

    try {
        const response = await razorpay.orders.create(options);
        return response;
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = {
    Pay,
};
