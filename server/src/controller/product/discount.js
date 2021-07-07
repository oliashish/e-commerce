const { Discount } = require("../../models");

const Create = async (name, desc, percent, active) => {
    try {
        const discount = await Discount.create({
            name,
            desc,
            percent,
            active,
        });
        return discount;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    Create,
};
