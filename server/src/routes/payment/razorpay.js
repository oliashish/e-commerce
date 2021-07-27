const paymentRoute = require("express").Router();
const { Pay } = require("../../controller/payment/razorpay");

paymentRoute.get("/pay", async (req, res) => {
    Pay();
});
paymentRoute.post("/pay", async (req, res) => {
    const result = await Pay(req.body);
    res.send(result);
});

paymentRoute.post("/verify/razorpaysign", (req, res) => {
    const crypto = require("crypto");
    const hash = crypto
        .createHmac("SHA256", process.env.RAZORPAY_WEBHOOK_SECRET)
        .update(JSON.stringify(req.body))
        .digest("hex");

    console.log(hash);
    console.log(req.headers["x-razorpay-signature"]);

    if (hash === req.headers["x-razorpay-signature"]) {
        // save payment info to database and
        res.send({ message: "payment successfull" });
    } else {
        // check for errors
        //res.send("something went wronge.")
    }
});
module.exports = paymentRoute;
