// checks for req cookie and jwt

const jwt = require("jsonwebtoken");
require("dotenv").config((path = "/"));

module.exports = function (req, res, next) {
    let token = req.cookies._access_token;

    if (!token) res.send("Access Denied").status(401);

    try {
        const verified = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_KEY);
        req.user = verified;
        next();
    } catch (error) {
        return error.message;
    }
};
