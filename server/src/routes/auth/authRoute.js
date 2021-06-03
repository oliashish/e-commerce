const route = require("express").Router();
const verify = require("../../controller/auth/verify.jwt");
const { emailExists } = require("../../controller/auth/validation");
const { SignUp, SignIn } = require("../../controller/auth/auth");

route.post("/signup", async (req, res) => {
    const [newUser, accessToken] = await SignUp(req.body);

    res.cookie("_access_token", accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 1000,
    });
    res.json(newUser);
});

route.post("/login", verify, async (req, res) => {
    const [user, refreshToken] = await SignIn(req.body.data);

    res.cookie("_refresh_token", refreshToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 1000,
    });
    res.json(user);
});

route.get("/logout", (req, res) => {
    res.clearCookie("_access_token").status(200).send("cookie cleared");
});

module.exports = route;
