// require product model
const { Product } = require("../../models");

const createProduct = async (body, image) => {
    const { cat_id, desc_id, name, price, total_available, desc } = body;
    try {
        const product = await Product.create({
            cat_id,
            disc_id,
            name,
            image,
            desc,
            price,
            total_available,
        });
        return product;
    } catch (err) {
        throw err;
    }
};
const getAll = async () => {
    try {
        const products = await Product.findAll({
            exclude: "DiscountId",
        });
        return products;
    } catch (err) {
        throw err;
    }
};
const GetProductById = () => {};
const updateProduct = () => {};
const deleteProduct = () => {};

module.exports = {
    createProduct,
    getAll,
    GetProductById,
    updateProduct,
    deleteProduct,
};
