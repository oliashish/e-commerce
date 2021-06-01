const { Users } = require("../../models");

// SignUp Validation
const emailExists = async (req, res, next) => {
    const { email } = req.body;
    const user = await Users.findOne({
        where: {
            email,
        },
    });

    if (!user) {
        next();
    } else {
        res.json({ msg: "email already exists.." });
    }
};

module.exports = {
    emailExists,
};
