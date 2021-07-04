const { ProductCategory } = require("../../models");

const Create = async (name, type) => {
    try {
        const category = await ProductCategory.create({ name, type });
        return category;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    Create,
};
