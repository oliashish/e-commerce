const { UserAddress } = require("../../models");

const CreateUserAddress = async (data) => {
    const {
        id: user_id,
        address_line,
        city,
        pin_cod,
        country,
        username,
    } = data;

    try {
        const userAddress = await UserAddress.create({
            user_id,
            address_line,
            city,
            pin_cod,
            country,
            username,
        });
        return userAddress;
    } catch (err) {
        throw err;
    }
};

module.exports = { CreateUserAddress };
