const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
require("dotenv").config({ path: "../.env" });
const compression = require("compression");

// routes and db imports
const db = require("./database/dbConnection");
const auth = require("./routes/auth/authRoute");
const payment = require("./routes/payment/razorpay");
const product = require("./routes/products/product");
const user = require("./routes/users/user");

const PORT = process.env.PORT || 5000;

const app = express();

// middlewares
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(
    session({
        key: "accessToken",
        secret: process.env.JWT_ACCESS_TOKEN_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60 * 60 * 24,
        },
    })
);
app.use(compression());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../../client/public/images/"));

// routing

app.use("/api/authenticate", auth);
app.use("/api/payments", payment);
app.use("/api/products", product);
app.use("/api/user/", user);
app.use(express.static(path.join(__dirname, "../../client/build")));

// rendering react frontend from client directory

if (process.env.NODE_ENV === "production") {
    app.use(express.static("../../client/build"));
}
app.use("*", (req, res) => {
    res.send(path.join(__dirname, "../../client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
