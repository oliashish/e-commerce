const userRoute = require("express").Router();
const {getUserById} = require("../../controller/user/user.js")

userRoute.get("/user/:id", async (req, res) => {
    const id = req.params.id;
    const user = await getUserById(id);
    if (user) {
        res.status(200).send(user);
    } else {
        throw new Error("something went wrong");
    }
});

module.exports = userRoute;
