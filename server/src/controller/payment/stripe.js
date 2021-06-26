const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { v4: uuid } = require("uuid");

const Pay = async ({ product, token }) => {
    const idempotencyKey = uuid();

    const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
    });

    try {
        const result = await stripe.charges.create(
            {
                amount: product.price * 100,
                customer: customer.id,
                currency: "usd",

                receipt_email: token.email,
                shipping: {
                    name: "Jenny Rosen",
                    address: {
                        line1: "510 Townsend St",
                        postal_code: "98140",
                        city: "San Francisco",
                        state: "CA",
                        country: "US",
                    },
                },
                description: "success",
            },
            { idempotencyKey }
        );

        return result;
    } catch (err) {
        return err.message;
    }
};

module.exports = {
    Pay,
};
