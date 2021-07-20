// require product model
const { Product } = require("../../models");

const createProduct = async (body, image) => {
    const { name, price, brand, sku, desc } = body;
    try {
        const product = await Product.create({
            name,
            image,
            desc,
            brand,
            price,
            sku,
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
