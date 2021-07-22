const { User } = require("../models");

// SignUp Validation
const emailExists = async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({
        where: {
            email,
        },
    });

    if (!user) {
        next();
    } else {
        res.json({ message: "email already exists.." });
    }
};

module.exports = {
    emailExists,
};
