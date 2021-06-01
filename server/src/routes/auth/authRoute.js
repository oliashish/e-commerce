const route = require("express").Router();
const verify = require("../../controller/auth/verify.jwt");
const { emailExists } = require("../../controller/auth/validation");
const { SignUp, SignIn } = require("../../controller/auth/auth");

route.post("/signup", emailExists, async (req, res) => {
    console.log("in post route");
    const result = await SignUp(req.body);

    res.status(201)
        .cookie("jwt", result[0], {
            httpOnly: true,
            expiresIn: 600,
        })
        .json({ success: result });
});

route.post("/login", async (req, res) => {
    const result = await SignIn(req.body);
    res.send(result);
});

route.post("logout", (req, res) => {});

module.exports = route;
