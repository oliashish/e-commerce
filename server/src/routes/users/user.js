const { CreateUserAddress } = require("../../controller/user/user");

const route = require("express").Router();

// user address routes

route.post("/address", async (req, res) => {
    try {
        const userAddress = await CreateUserAddress(req.body);
        res.send(userAddress);
    } catch (err) {
        throw err;
    }
});
route.get("/address", async (req, res) => {
    res.send("in address route");
});

// user cart routes

module.exports = route;
