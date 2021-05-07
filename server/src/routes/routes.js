const route = require("express").Router();

route.get("/test", (req, res) => {
    console.log("inside  reoute");
    res.send({
        message: "This is the initial setup and is working great..!!!",
    });
});

module.exports = route;
