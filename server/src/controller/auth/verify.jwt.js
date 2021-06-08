// checks for req cookie and jwt

const jwt = require("jsonwebtoken");
require("dotenv").config((path = "/"));

module.exports = function (req, res, next) {
    const _access_token = req.headers.cookie;
    const token = _access_token.split("=")[1];

    if (!token) res.send("Access Denied").status(401);

    try {
        const verified = jwt.verify(
            token,
            process.env.JWT_ACCESS_TOKEN_KEY ||
                "hshkbfauebkwuegb8293t92832bfweufwefbwjfweiouf"
        );
        req.user = verified;
        next();
    } catch (error) {
        return error.message;
    }
};
