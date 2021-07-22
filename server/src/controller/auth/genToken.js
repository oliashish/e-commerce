const jwt = require("jsonwebtoken");
require("dotenv");

const accessToken = (user) => {
    const token = jwt.sign({ _id: user.id }, process.env.JWT_ACCESS_TOKEN_KEY, {
        expiresIn: "10d",
    });
    return token;
};

// refrestoken = (user) => {
//     const token = jwt.sign({ _id: user.id }, process.env.JWT_REFRESH_TOKEN_KEY);
//     return token;
// };

module.exports = {
    accessToken,
};
