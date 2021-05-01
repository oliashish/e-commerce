const route = require("express").Router();

route.get("/test", (req, res) => {
    res.json({
        message: "This is the initial setup and is working great..!!!",
    });
});

module.exports = route;
