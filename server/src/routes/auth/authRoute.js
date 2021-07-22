const route = require("express").Router();
const verify = require("../../middleware/verify.jwt");
const { emailExists } = require("../../middleware/validation");
const { SignUp, SignIn } = require("../../controller/auth/auth");

route.post("/signup", emailExists, async (req, res) => {
    const response = await SignUp(req.body);

    if (response.error) {
        res.status(406).json({ message: "something went wrong try again.." });
    } else {
        res.cookie("_access_token", response.access_token, {
            httpOnly: true,
        });
        res.send(response.newUser);
    }
});

route.post("/login", verify, async (req, res) => {
    const response = await SignIn(req.body);

    if (response.error) {
        res.status(401).send(response.error);
    }

    res.cookie("_access_token", response.access_token, {
        httpOnly: true,
        // secure: true,
    });
    res.json(response.user);
});

route.get("/logout", (req, res) => {
    res.clearCookie("_access_token")
        .status(200)
        .json({ message: "logout successfully" });
});

module.exports = route;
