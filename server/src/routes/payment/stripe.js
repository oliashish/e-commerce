const paymentRoute = require("express").Router();
const { Pay } = require("../../controller/payment/stripe");

paymentRoute.get("/pay", async (req, res) => {
    Pay();
});
paymentRoute.post("/pay", async (req, res) => {
    const result = await Pay(req.body);
    res.send(result);
});
module.exports = paymentRoute;
