const route = require("express").Router();
const { SignUp } = require("../../controller/auth/auth");

route.post("/signup", async (req, res) => {
    const result = await SignUp(req.body);
    res.send(result);
});
route.post("/login", (req, res) => {});

route.post("logout", (req, res) => {});

module.exports = route;
