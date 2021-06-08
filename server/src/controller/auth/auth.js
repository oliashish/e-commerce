/*
     - bcrypt library for password hashing
     - hashedPassword is a hash of user password and salt generated by bcrypt library 
     
*/

const bcrypt = require("bcrypt");
const { accessToken, refrestoken } = require("./genToken");
const { Users } = require("../../models");

const SignUp = async (data) => {
    const { username, email, password, contact } = data;

    const salt = await bcrypt.genSalt(15);

    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const newUser = await Users.create({
            username,
            email,
            password: hashedPassword,
            contact_number: contact,
        });

        const access_token = await accessToken(newUser);

        return [newUser, accessToken];
    } catch (error) {
        return error.message;
    }
};
const SignIn = async (data) => {
    const { email, password } = data;

    // checking for user existence through email
    try {
        let user = await Users.findOne({
            where: {
                email,
            },
        });

        // comparing password
        const isValid = bcrypt.compare(password, user.password);

        // sending 'or' incorrect for security reasons
        if (!user || !isValid) return "Email or Password incorrect. Try Again.";

        const refreshToken = refrestoken(user);
        return [user, refreshToken];
    } catch (error) {
        return error;
    }
};

module.exports = {
    SignUp,
    SignIn,
};
