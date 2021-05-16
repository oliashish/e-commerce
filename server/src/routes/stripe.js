const paymentRoute = require("express").Router();
const stripeFunc = require("../stripe_payment/stripe");

paymentRoute.post("/", async (req, res) => {
    const data = req.body;
    const result = await stripeFunc(data);
    res.send(result);
});

module.exports = paymentRoute;
