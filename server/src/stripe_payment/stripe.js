const { v4: uuid } = require("uuid");
require("dotenv").config({ path: __dirname + "/../../.env" });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const stripeFunc = (data) => {
    const { email, card, amount } = data;
    const idempotencyKey = uuid();
    return stripe.customers
        .create({
            email,
        })
        .then((customer) => {
            stripe.charges.create(
                {
                    amount: amount * 1000,
                    customer: email,
                    currency: "usd",
                    description: "paid",
                    receipt_email: email,
                },
                { idempotencyKey }
            );
        })
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err;
        });
};

module.exports = stripeFunc;
