const jwt = require("jsonwebtoken");
require("dotenv").config((path = "/"));

module.exports = function (req, res, next) {
    // verify access with token at req header

    const token = req.header("auth-token");

    if (!token) res.send("Access Denied").status(401);

    // verified users are assigned to access protected routes
    try {
        const verified = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_KEY);
        req.user = verified;
        next();
    } catch (error) {
        return error.message;
    }
};
