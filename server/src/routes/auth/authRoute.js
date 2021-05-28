const route = require("express").Router();
const verify = require("../../controller/auth/verify.jwt");
const { SignUp, SignIn } = require("../../controller/auth/auth");

let token;

route.post("/signup", async (req, res) => {
    const result = await SignUp(req.body);
    res.send(result);
});
route.post("/login", async (req, res) => {
    console.log("this is route");
    const result = await SignIn(req.body);
    res.send(result);
});

route.post("logout", (req, res) => {});

route.get("/test", verify, (req, res) => {
    const posts = {
        name: "post1",
        des: "usdhgksdug htis i sidsugub ksjdguksdgb",
    };
    res.send(posts);
});

module.exports = route;
