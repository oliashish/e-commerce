// require product model
const { Product } = require("../../models");

const createProduct = async (body, image) => {
    const { name, seller_id, price, brand, sku, desc, category } = body;
    try {
        const product = await Product.create({
            seller_id,
            name,
            image,
            desc,
            brand,
            price,
            sku,
            category,
        });
        return product;
    } catch (err) {
        throw err;
    }
};
const getAll = async () => {
    try {
        const products = await Product.findAll();
        return products;
    } catch (err) {
        throw err;
    }
};
const GetProductById = async (id) => {
    try {
        const product = await Product.findByPk(id);
        return product;
    } catch (err) {
        throw err.message;
    }
};

// only admin access
const updateProduct = () => {};
const deleteProduct = () => {};

module.exports = {
    createProduct,
    getAll,
    GetProductById,
    updateProduct,
    deleteProduct,
};
