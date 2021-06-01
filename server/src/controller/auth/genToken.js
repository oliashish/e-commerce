const jwt = require("jsonwebtoken");
require("dotenv");

const accesstoken = (user) => {
    const token = jwt.sign(
        { _id: user.id },
        process.env.JWT_ACCESS_TOKEN_KEY ||
            "hshkbfauebkwuegb8293t92832bfweufwefbwjfweiouf"
    );
    return token;
};

refrestoken = (user) => {
    const token = jwt.sign(
        { _id: user.id },
        process.env.JWT_REFRESH_TOKEN_KEY ||
            "hshkbfauebkwuegb8293t92832bfweufwefbwjfweiouf"
    );
    return token;
};

module.exports = {
    accesstoken,
    refrestoken,
};
